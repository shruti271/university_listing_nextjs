from django.urls import path
from accounts.views.views import  WhoAmIView, StudentSignupView, StudentLoginView, \
             ActivateAccount, SendActivation, ResetPass, SendReset

urlpatterns = [
    path('signup/student/',  StudentSignupView.as_view()),
    path('signin/student/', StudentLoginView.as_view()),
    path('whoami/',  WhoAmIView.as_view()),

    # Verfify token
    path('activate/student/',  ActivateAccount.as_view()),
    path('send/activate/student/',  SendActivation.as_view()),

    path('reset-password/',  ResetPass.as_view()),
    path('send/reset-password/',  SendReset.as_view()),
]