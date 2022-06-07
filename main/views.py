from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework import status
from django.http import Http404, HttpResponse

from django.contrib.auth.models import User

from main.models import University, Program, Scholarship
from main.serializers import UniversityPublicSerializer, ProgramPublicSerializer, \
    ScholarshipPublicSerializer, GlobalSearchSerializer


class UniversitiesList(APIView):
    """
    View returns the list of Universities
    """

    permission_classes = [permissions.AllowAny]
    serializer_class = UniversityPublicSerializer
    def get(self, request, format=None):
        """
        Return a list of all Universities.
        """
        context = {'request': request}
        universities = University.objects.all()
        serializer = self.serializer_class(universities, many=True, context=context).data
        return Response(serializer)

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

    def put(self, request, pk, format=None):
        university = self.get_object(pk)
        serializer = self.serializer_class(university, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

    def put(self, request, pk, format=None):
        program = self.get_object(pk)
        serializer = self.serializer_class(program, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

    def put(self, request, pk, format=None):
        scholarship = self.get_object(pk)
        serializer = self.serializer_class(scholarship, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

    permission_classes = [permissions.AllowAny]
    serializer_class = UniversityPublicSerializer
    queryset = University.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    # filterset_fields = ['UAE_Ranking']
    filterset_fields = {
            'UAE_Ranking':  ['gte', 'lte', 'exact', 'gt', 'lt'],
        }
    search_fields = ['name', 'city']

    # double underscore gte is for greater than equal to
    # double underscore gt is for greater than
    # double underscore lte is for less than equal to
    # double underscore lt is for less than



class SearchProgram(generics.ListAPIView):

    permission_classes = [permissions.AllowAny]
    serializer_class = ProgramPublicSerializer
    queryset = Program.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    # filterset_fields = ['application_deadline']
    filterset_fields = {
            'application_deadline': ['gte', 'lte', 'exact', 'gt', 'lt'],
        }
    search_fields = ['name', 'description',]



class SearchScholarship(generics.ListAPIView):

    permission_classes = [permissions.AllowAny]
    serializer_class = ScholarshipPublicSerializer
    queryset = Scholarship.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = {
            'application_deadline': ['gte', 'lte', 'exact', 'gt', 'lt'],
            'renewable': ['exact'],
        }
    search_fields = ['name', 'description']