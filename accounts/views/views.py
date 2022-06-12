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







class StudentSignupView(APIView):
    """ 
    View creates a User.
    This one generates a username for django from the the email.
    """    
    permission_classes = [permissions.AllowAny]
    authentication_classes = [authentication.JWTAuthentication]

    serializer_class = ClosedStudentSerializer

    def post(self, request):
        data = request.data
        email = data['email']

        serializer_context = {
            'request': request,
        }

        # A simple check that the user is not authenticated
        if not request.user.is_authenticated:
            if User.objects.filter(email=email).exists():
                raise DuplicateException

            # First, we remove everything on the right of @
            e=email.split('@')[0] 
            username = ''
            # Let's populate the username variable
            for i in e:
                #Then, we remove every special character.
                if i.isalnum():
                    username+=i
            username = username 
            #Removing numbers from the username 
            username = ''.join([i for i in username if not i.isdigit()]) 
            if User.objects.filter(username=username).exists():
                username = e
            user = User.objects.create_user(
                username, email, password=data.get('password')
            )
            user.save()
            student, created = Student.objects.get_or_create(user = user)

            refresh = RefreshToken.for_user(user)
            data = ({
                'user': self.serializer_class(student, context=serializer_context).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token)
            })
            return Response(data, status=status.HTTP_201_CREATED)
        else:
            student = Student.objects.get(user=request.user)
            if not student:
                raise NotFound
            refresh = RefreshToken.for_user(request.user)
            data= ({
                'user': self.serializer_class(student, context=serializer_context).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token)})

            return Response(data, status=status.HTTP_200_OK)

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
        serializer_context = {
            'request': request,
        }
        email = str(data.get('email'))
        password = str(data.get('password'))
        if User.objects.filter(email=email).exists():
            base_user = User.objects.get(email=email)
            student = Student.objects.get(user=base_user)

            is_auth = base_user.check_password(password)
            if is_auth:
                refresh = RefreshToken.for_user(base_user)
                u = self.serializer_class(student, context=serializer_context).data

                return Response({
                    'user': u,
                    'refresh_token': str(refresh),
                    'access_token': str(refresh.access_token),
                })
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
                

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
