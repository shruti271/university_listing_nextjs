from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User


from main.models import University, Program, Scholarship
from main.serializers import UniversityPublicSerializer, ProgramPublicSerializer, ScholarshipPublicSerializer
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