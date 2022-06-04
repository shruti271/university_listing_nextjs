from django.urls import path
from .views import UniversitiesList, ProgramsList, ScholarshipsList

urlpatterns = [
    path('universities/', UniversitiesList.as_view()),
    path('programs/', ProgramsList.as_view()),
    path('scholarships/', ScholarshipsList.as_view()),
]