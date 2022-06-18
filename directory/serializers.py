from rest_framework import serializers

from directory.models import University, Program, Scholarship

class UniversityPublicSerializer(serializers.ModelSerializer):
    object_type = 'University'
    class Meta:
        model = University
        fields = '__all__'

class ProgramPublicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Program
        fields = ['id', 'university', 'description', 'language']

class ScholarshipPublicSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Scholarship
        fields = ['id', 'name', 'description', 'renewable', 'application_deadline']

class GlobalSearchSerializer(serializers.ModelSerializer):

   class Meta:
      model = University
      fields = ['id', 'name', 'description']

   def to_native(self, obj):
      if isinstance(obj, Program): 
         serializer = ProgramPublicSerializer(obj)
      elif isinstance(obj, Scholarship):
         serializer = ScholarshipPublicSerializer(obj)
      else:
         raise Exception("Sorry, we could not find what you're looking for.")
      return serializer.data