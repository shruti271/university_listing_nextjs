import datetime
from django.core.mail import send_mail
from django.template.loader import render_to_string

from accounts.models import User, Student, Verification
from accounts.serializers import ResetpasswordSerializer

from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

from accounts.exceptions import *

from django.conf import settings

class ActivateAccount(APIView):

    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        data = request.data
        email = str(data.get('email'))
        token_request = str(data.get('token'))

        if User.objects.filter(email=email).exists() and Student.objects.filter(user = User.objects.get(email=email)).exists() and Verification.objects.filter(user=User.objects.get(email=email), used=False).exists():

            user = User.objects.get(email=email)
            student = Student.objects.get(user=user)
            verification = Verification.objects.get(user=user, used=False, purpose='Activation')

            if user.is_active == True:
                raise AlreadyActivated

            if not student.is_onboarded == True:
                raise NotOnboarded

            if token_request == str(verification.hash):
                user.is_active = True
                user.save()
                verification.used = True
                verification.save()
                return Response({'detail': u'Your account is activated.'}, status = status.HTTP_200_OK)
            else:
                raise InvalidToken
        else:
            raise NotFound

class SendActivation(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        data = request.data
        email = str(data.get('email'))

        if User.objects.filter(email=email).exists() and Student.objects.filter(user = User.objects.get(email=email)).exists():
            user = User.objects.get(email=email)
            student = Student.objects.get(user=user)
        
            if user.is_active==False and student.is_onboarded==True:
                verification, created = Verification.objects.get_or_create(user=user, used=False, purpose='Activation')

                protocol = 'http'
                mail_subject = 'Please activate your account'
                message = render_to_string('accounts/activation.html', {
                    'domain':'localhost:3000/activate/',
                    'user': user,
                    'verification_token': str(verification.hash),
                    'protocol': protocol,
                })
                to_email = user.email
                email = settings.EMAIL_HOST_USER
                send_mail(
                mail_subject,
                message,
                email,
                [to_email],
                fail_silently=False)

                return Response({'detail': u'Activation email sent'}, status = status.HTTP_200_OK)

            elif user.is_active==False and student.is_onboarded==False:
                raise NotOnboarded
            
            elif user.is_active==True:
                raise AlreadyActivated
        
        else:
            raise NotFound

class ResetPass(APIView):

    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        data = request.data
        email = str(data.get('email'))
        token_request = str(data.get('token'))

        if User.objects.filter(email=email).exists() and Student.objects.filter(user = User.objects.get(email=email)).exists() and Verification.objects.filter(user=User.objects.get(email=email), used=False, purpose = 'Password Reset',latest_update__gte=datetime.datetime.now() - datetime.timedelta(minutes=30)).exists(): 

            user = User.objects.get(email=email)
            student = Student.objects.get(user=user)
            verification = Verification.objects.get(user=user, used=False, purpose = 'Password Reset')

            if not student.is_onboarded == True:
                raise NotOnboarded

            if user.is_active == True and student.is_onboarded == True:
                if str(verification.hash) == token_request:
                    serializer=ResetpasswordSerializer(data=request.data)
                    if serializer.is_valid(raise_exception=True):
                        serializer.save()
                        verification.used=True
                        verification.save()
                        return Response({'detail': u'Your password is updated.'}, status = status.HTTP_200_OK)
                else:
                    raise InvalidToken
            else:
                raise IncativeAccount

        else:
            raise NotFound
            

class SendReset(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        data = request.data
        email = str(data.get('email'))

        if User.objects.filter(email=email).exists() and Student.objects.filter(user = User.objects.get(email=email)).exists():
            user = User.objects.get(email=email)
            student = Student.objects.get(user=user)
        
            if user.is_active==True and student.is_onboarded==True:
                verification, created = Verification.objects.get_or_create(user=user, used=False, purpose = 'Password Reset')
                
                protocol = 'http'
                mail_subject = 'Reset password request'
                message = render_to_string('accounts/reset_password.html', {
                    'domain':'localhost:3000/activate/',
                    'user': user,
                    'verification_token': str(verification.hash),
                    'protocol': protocol,
                })
                to_email = user.email
                email = settings.EMAIL_HOST_USER
                send_mail(
                mail_subject,
                message,
                email,
                [to_email],
                fail_silently=False)

                return Response({'detail': u"We've emailed you the instructions to reset your password."}, status = status.HTTP_200_OK)

            else:
                raise NotFound
        
        else:
            raise NotFound