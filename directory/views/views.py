from django.views import View
from django.http import Http404, HttpResponse
from django.contrib.auth.models import User

from directory.models import University, Program, Scholarship
from directory.serializers import UniversityPublicSerializer, ProgramPublicSerializer, \
                                ScholarshipPublicSerializer, GlobalSearchSerializer

from rest_framework import status
from rest_framework import authentication, permissions
from rest_framework.views import APIView
from rest_framework.response import Response


from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView

class UniversitiesList(ListAPIView):
    """
    View returns the list of Universities
    """

    permission_classes = [permissions.AllowAny]
    queryset = University.objects.all()
    serializer_class = UniversityPublicSerializer
    pagination_class = PageNumberPagination

    

class UniversityDetail(APIView):
    """
    View returns the details of a specific University.
    """
    permission_classes = [permissions.AllowAny]
    serializer_class = UniversityPublicSerializer

    def get_object(self, pk):
        try:
            return University.objects.get(pk=pk)
        except University.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        university = self.get_object(pk)
        serializer = self.serializer_class(university)
        return Response(serializer.data)



class ProgramsList(APIView):
    """
    View returns the list of Programs.
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = ProgramPublicSerializer

    def get(self, request, format=None):
        """
        Return a list of all Programs.
        """
        context = {'request': request}
        programs = Program.objects.all()
        serializer = self.serializer_class(programs, many=True, context=context).data
        return Response(serializer)

class ProgramsDetail(APIView):
    """
    View returns the details of a specific Program.
    """
    permission_classes = [permissions.AllowAny]
    serializer_class = ProgramPublicSerializer

    def get_object(self, pk):
        try:
            return Program.objects.get(pk=pk)
        except Program.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        program = self.get_object(pk)
        serializer = self.serializer_class(program)
        return Response(serializer.data)


class ScholarshipsList(APIView):
    """
    View returns the list of Scholarships.
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = ScholarshipPublicSerializer

    def get(self, request, format=None):
        """
        Return a list of all Scholarships.
        """
        context = {'request': request}
        scholarships = Scholarship.objects.all()
        serializer = self.serializer_class(scholarships, many=True, context=context).data
        return Response(serializer)


class ScholarshipDetail(APIView):
    """
    View returns the details of a specific Scholarship.
    """
    permission_classes = [permissions.AllowAny]
    serializer_class = ScholarshipPublicSerializer

    def get_object(self, pk):
        try:
            return Scholarship.objects.get(pk=pk)
        except Scholarship.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        scholarship = self.get_object(pk)
        serializer = self.serializer_class(scholarship)
        return Response(serializer.data)


# Global search functionality that can search inside of the three database tables
# This particular search functionality can have optimizations later for a better search performance
# This can also have machine learning to give smart search results

from rest_framework import generics 
from django.db.models import Q
from itertools import chain

class GlobalSearch(generics.ListAPIView):
   serializer_class = GlobalSearchSerializer

   def get_queryset(self):
        query = self.request.query_params.get('query', None)
        programs = Program.objects.filter(Q(name__icontains=query)  | Q(id__icontains=query) | Q(description__icontains=query) )
        scholarship = Scholarship.objects.filter(Q(name__icontains=query) | Q(id__icontains=query) | Q(description__icontains=query))
        universities = University.objects.filter(Q(name__icontains=query) | Q(id__icontains=query) | Q(description__icontains=query))
        all_results = list(chain(programs, scholarship, universities)) 
        #all_results.sort(key=lambda x: x.created)
        return all_results 



from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

class SearchUniversity(generics.ListAPIView):

    '''
    This should filter and search through all the Universities.
    '''

    permission_classes = [permissions.AllowAny]
    serializer_class = UniversityPublicSerializer
    queryset = University.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = {
            'rank_order':  ['gte', 'lte', 'exact', 'gt', 'lt'],
            'institute_type': ['exact'],
            'student_body_size':  ['gte', 'lte', 'exact', 'gt', 'lt'],
            'location': ['exact'],
        }
    search_fields = ['name', 'city']

    # gte: greater than or equal to
    # gt: greater than
    # lte: less than or equal to
    # lt: less than


class SearchProgram(generics.ListAPIView):

    '''
    This should filter and search through all the Programs.
    '''

    permission_classes = [permissions.AllowAny]
    serializer_class = ProgramPublicSerializer
    queryset = Program.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = {
            'application_deadline': ['gte', 'lte', 'exact', 'gt', 'lt'],
        }
    search_fields = ['name', 'description',]

    # gte: greater than or equal to
    # gt: greater than
    # lte: less than or equal to
    # lt: less than


class SearchScholarship(generics.ListAPIView):

    '''
    This should filter and search through all the Scholarships.
    '''

    permission_classes = [permissions.AllowAny]
    serializer_class = ScholarshipPublicSerializer
    queryset = Scholarship.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = {
            'application_deadline': ['gte', 'lte', 'exact', 'gt', 'lt'],
            'renewable': ['exact'],
        }
    search_fields = ['name', 'description']

    # gte: greater than or equal to
    # gt: greater than
    # lte: less than or equal to
    # lt: less than

from django.shortcuts import render
from bs4 import BeautifulSoup
from django.http import HttpResponse
from urllib.request import Request, urlopen
from selenium import webdriver
import requests
from selenium.webdriver.chrome.options import Options

def collectData(request):
    
    path = '/Users/mohamed/Downloads/chromedriver'
    
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    browser = webdriver.Chrome(executable_path=path,
                              chrome_options=chrome_options
                             )

    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}
    response = requests.get('https://www.timeshighereducation.com/sites/default/files/the_data_rankings/world_university_rankings_2022_0__e7070f0c2581be5fe6ab6392da206b36.json', headers=headers)

    data = response.json()
    #print(data['data'][0]['rank'])
    for u in data['data'][:20]:
        desc = ''
        url = "https://www.timeshighereducation.com" + u['url']
        
        browser.get(url)
        soup = BeautifulSoup(browser.page_source, "lxml")
        results = soup.find('div', {'class': 'read-more-processed'})
        if results is not None: 
            parags = results.find_all('p')
            if parags is not None:
                for p in parags:
                    desc = desc + ' ' + p.text

        University.objects.get_or_create(name = u['name'], rank=u['rank'], rank_order=u['rank_order'], description = desc, institute_type = '', campus_settings = '' , student_body_size = u['stats_number_students'].replace(',', ''), prince_range ='', scores_overall = u['scores_overall'], scores_teaching = u['scores_teaching'], scores_teaching_rank = u['scores_teaching_rank'], scores_research = u['scores_research'], scores_citations = u['scores_citations'], scores_industry_income = u['scores_industry_income'], scores_industry_income_rank = u['scores_industry_income_rank'], scores_international_outlook = u['scores_international_outlook'], scores_international_outlook_rank = u['scores_international_outlook_rank'], location = u['location'], city='', stats_student_staff_ratio = u['stats_student_staff_ratio'], stats_pc_intl_students = u['stats_pc_intl_students'], stats_female_male_ratio = u['stats_female_male_ratio'], subjects_offered = u['subjects_offered'], closed = u['closed'], unaccredited = u['unaccredited'])

    return HttpResponse('data')

def collectScholarships(request):
    path = '/Users/mohamed/Downloads/chromedriver'
    
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    browser = webdriver.Chrome(executable_path=path,
                              chrome_options=chrome_options
                             )

    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}
    #response = requests.get('https://www.internationalscholarships.com/scholarships', headers=headers)
    url = "https://www.internationalscholarships.com/scholarships"
        
    browser.get(url)
    soup = BeautifulSoup(browser.page_source, "lxml")

    results = soup.find_all('tr', {'class': 'featured'})
    # for r in results:
    #     print(r.find_all('td'))

    

    import requests

    cookies = {
    '__gads': 'ID=a823a139bae56e82-224977dd18d40014:T=1656680701:RT=1656680701:S=ALNI_MYe9lYqo39BYO1MrIjbZ6tUgx_xzw',
    '_gid': 'GA1.2.164466046.1656954148',
    'cookieconsent_status': 'dismiss',
    '__gpi': 'UID=000009875f769037:T=1656680701:RT=1657035649:S=ALNI_Mb9Fnc8sLWPDYkjZ9wA20vqwVL0dA',
    '_gat_UA-12565915-9': '1',
    'PHPSESSID': 'beedf2b69e5cade61a1269dc58da9930',
    '_csrf': '165b33c11455566e26d7b1b7260a101f08859195d78dd0db3cb529b945001792a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22NZAH7vHjyN9fOzogi7Ej1Yvyce2H7_5O%22%3B%7D',
    '_ga': 'GA1.2.2120178691.1656680701',
    '_ga_KXQ425PMLX': 'GS1.1.1657041736.6.1.1657042183.0',
    }

    headers = {
        'authority': 'www.internationalscholarships.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en,en-US;q=0.9,fr;q=0.8',
        'cache-control': 'max-age=0',
        # Requests sorts cookies= alphabetically
        # 'cookie': '__gads=ID=a823a139bae56e82-224977dd18d40014:T=1656680701:RT=1656680701:S=ALNI_MYe9lYqo39BYO1MrIjbZ6tUgx_xzw; _gid=GA1.2.164466046.1656954148; cookieconsent_status=dismiss; __gpi=UID=000009875f769037:T=1656680701:RT=1657035649:S=ALNI_Mb9Fnc8sLWPDYkjZ9wA20vqwVL0dA; _gat_UA-12565915-9=1; PHPSESSID=beedf2b69e5cade61a1269dc58da9930; _csrf=165b33c11455566e26d7b1b7260a101f08859195d78dd0db3cb529b945001792a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22NZAH7vHjyN9fOzogi7Ej1Yvyce2H7_5O%22%3B%7D; _ga=GA1.2.2120178691.1656680701; _ga_KXQ425PMLX=GS1.1.1657041736.6.1.1657042183.0',
        'referer': 'https://www.internationalscholarships.com/login',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
    }

    
    
    tds = results[0].find_all('td')[0]
    link0 = tds.find_all('a')[0]['href']
    # br = webdriver.Chrome(executable_path=path,
    #                           chrome_options=chrome_options
    #                          )
    # br.get(url + link0)
    response = requests.get(url + link0, cookies=cookies, headers=headers)
    detail_soup = BeautifulSoup(response.content, "html.parser")
    results_detail0 = detail_soup.find('h1', {'class': 'title'})


    div_desc = detail_soup.find('div', {'class': 'award-description'})

    #description
    desc = div_desc.find_all('p')[0].text

    #moreinfo
    more_info = div_desc.find_all('p')[1].text
    list_of_dots_and_titles = more_info.split('•')
    print(list_of_dots_and_titles)
    list_of_ELIGIBILITY = []
    list_of_ELIGIBILITY = []
    list_of_ELIGIBILITY = []
    for i in list_of_dots_and_titles:
        i.replace(' ','')


    list_extra = detail_soup.find_all('div', {'class': "clear {class}"})
    #print(list_extra)
    # for i in list_extra:
    #     print(i.find('p').text)

    #contact = detail_soup.find('table', {'id': 'w4'})
    #print(contact.find_all('td'))
    #contact_info = contact.find_all('td')
    # for i in contact_info:
    #     print(i.text)


    # for item in tds:
    #     print(item)

    return HttpResponse('scholarships done')
