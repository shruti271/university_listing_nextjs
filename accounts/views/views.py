from django.shortcuts import render
from accounts.models import User, Student
from accounts.serializers import ClosedStudentSerializer

from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import APIException, NotFound
from rest_framework_simplejwt import authentication
from rest_framework_simplejwt.tokens import RefreshToken

class DuplicateException(APIException):
    status_code = 303
    default_detail = 'There is already a user with that email.'
    default_code = 'User already exists'

class WrongCreds(APIException):
    status_code = 303
    default_detail = 'Incorrect username or password.'
    default_code = 'Wrong credentials'

class IncativeAccount(APIException):
    status_code = 300
    default_detail = 'Your account is not activated.'
    default_code = 'Inactive account'







class StudentSignupView(APIView):
    """ 
    View creates a User.
    This one generates a username for django from the the email.
    """    
    permission_classes = [permissions.AllowAny]
    authentication_classes = [authentication.JWTAuthentication]

    serializer_class = ClosedStudentSerializer

    def post(self, request):

        """
        User creation, with active set to False.
        """
        data = request.data
        email = data['email']

        serializer_context = {
            'request': request,
        }

        # A simple check that the user is not authenticated
        if not request.user.is_authenticated:
            if User.objects.filter(email=email).exists():
                raise DuplicateException

            else:
                # First, we remove everything on the right of @
                e=email.split('@')[0] 
                username = ''

                # Let's populate the username variable
                for i in e:
                    #Then, we remove every special character.
                    if i.isalnum():
                        username+=i
                username = username

                # Here, we're checking if the user with a username without numbers exist, if does not, we remove the numbers from the username
                if not User.objects.filter(username=''.join([i for i in username if not i.isdigit()]) ).exists():
                    username = ''.join([i for i in username if not i.isdigit()]) 
                    
                # Creating a User
                user = User.objects.create_user(username, email, password=data.get('password'))

                user.is_active = False
                user.save()
                # Creating a student instance
                student, created = Student.objects.get_or_create(user = user)

                if created:
                    data = ({
                        'detail': 'User created.',
                    })
                    return Response(data, status=status.HTTP_201_CREATED)
                else:
                    raise DuplicateException

        else:
            if not Student.objects.filter(user=request.user).exists():
                raise NotFound

            refresh = RefreshToken.for_user(request.user)
            data= ({
                #'user': self.serializer_class(student, context=serializer_context).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token)})

            return Response(data, status=status.HTTP_200_OK)

    def put(self, request):

        """
        Onboarding.
        """

        data = request.data
        email = data.get('email')
        first_name = data.get('first_name')
        last_name = data.get('last_name')

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            user.first_name = first_name
            user.last_name = last_name
            user.save()
            student = Student.objects.get(user=user)
            

            # Updating the student object
            if user.is_active == False:
                for key in data:
                    setattr(student, key, data[key])
                student.save()

            # send verification email.
            refresh = RefreshToken.for_user(user)
            return Response({
                'detail': 'Verification email (feature on hold).',
                'refresh_token': str(refresh),
                'access_token': str(refresh.access_token),
                })

        else:
            raise NotFound

        

class StudentLoginView(APIView):
    """
    Raise an error if no authentication data passed
    into request header
    """
    permission_classes = [permissions.AllowAny]
    serializer_class = ClosedStudentSerializer

    def post(self, request, format=None):
        data = request.data
        base_user = None

        email = str(data.get('email'))
        password = str(data.get('password'))
        
        if User.objects.filter(email=email).exists():
            base_user = User.objects.get(email=email)

            is_auth = base_user.check_password(password)
            
            # if base_user.is_active==False:
            #     raise IncativeAccount

            if is_auth and not base_user.is_active==False:
                refresh = RefreshToken.for_user(base_user)
                return Response({
                    'refresh_token': str(refresh),
                    'access_token': str(refresh.access_token),
                })
           
            else:
                raise WrongCreds
        else:
            raise NotFound


from django.forms.models import model_to_dict
class WhoAmIView(APIView):
    """ Simple endpoint to test the authentication """

    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.JWTAuthentication]

    def get(self, request, format=None):
        """ Return request.user and request.auth """

        return Response({
            'request.user': model_to_dict(request.user)
        })

    def put(self, request, format=None):
        """ TODO : Update a user"""
