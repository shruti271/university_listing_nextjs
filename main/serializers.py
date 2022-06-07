from rest_framework import serializers


from main.models import University, Program, Scholarship
class UniversityPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = ['id', 'name', 'city', 'UAE_Ranking']

class ProgramPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ['id', 'university', 'description', 'language']

class ScholarshipPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scholarship
        fields = ['id', 'name', 'description', 'renewable', 'applicaiton_deadline']