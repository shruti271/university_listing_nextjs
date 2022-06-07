from django.urls import path
from main.views.views import  UniversitiesList, UniversityDetail, SearchUniversity, \
                    ProgramsList, ProgramsDetail, SearchProgram, \
                    ScholarshipsList, ScholarshipDetail, SearchScholarship, \
                    GlobalSearch, WhoAmIView

urlpatterns = [
    path('universities/', UniversitiesList.as_view()),
    path('universities/<int:pk>', UniversityDetail.as_view()),
    path('universities/filter/', SearchUniversity.as_view()),

    path('programs/', ProgramsList.as_view()),
    path('programs/<int:pk>', ProgramsDetail.as_view()),
    path('programs/filter/', SearchProgram.as_view()),

    path('scholarships/', ScholarshipsList.as_view()),
    path('scholarships/<int:pk>', ScholarshipDetail.as_view()),
    path('scholarships/filter/', SearchScholarship.as_view()),

    path('search/', GlobalSearch.as_view()),

    path('student/',  WhoAmIView.as_view())
]