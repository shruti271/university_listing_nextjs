from django import views
from django.urls import path

from directory.views.views import  UniversitiesList, UniversityDetail, SearchUniversity, \
                    ProgramsList, ProgramsDetail, SearchProgram, \
                    ScholarshipsList, ScholarshipDetail, SearchScholarship, \
                    GlobalSearch

# Scraping scripts
from directory.views.scrapers import collectData, collectScholarships, loadMasters


urlpatterns = [

    # Universities views (public)
    path('universities/', UniversitiesList.as_view()),
    path('universities/<int:pk>', UniversityDetail.as_view()),
    path('universities/filter/', SearchUniversity.as_view()),

    # Programs views (public)
    path('programs/', ProgramsList.as_view()),
    path('programs/<int:pk>', ProgramsDetail.as_view()),
    path('programs/filter/', SearchProgram.as_view()),

    # Scholarships views (public)
    path('scholarships/', ScholarshipsList.as_view()),
    path('scholarships/<int:pk>', ScholarshipDetail.as_view()),
    path('scholarships/filter/', SearchScholarship.as_view()),

    # Global search view (public)
    path('search/', GlobalSearch.as_view()),

    # Change for each scraper
    path('collect-data/', loadMasters)
]