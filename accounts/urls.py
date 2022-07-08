from django.urls import path
from accounts.views.views import  WhoAmIView, StudentSignupView, StudentLoginView

urlpatterns = [
    path('signup/student/',  StudentSignupView.as_view()),
    path('signin/student/', StudentLoginView.as_view()),
    path('whoami/',  WhoAmIView.as_view())
]