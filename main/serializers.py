from rest_framework import serializers


from main.models import University, Program, Scholarship
class UniversityPublicSerializer(serializers.ModelSerializer):
    object_type = 'University'
    class Meta:
        model = University
        fields = ['id', 'name', 'description', 'city', 'UAE_Ranking']

class ProgramPublicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Program
        fields = ['id', 'university', 'description', 'language']

class ScholarshipPublicSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Scholarship
        fields = ['id', 'name', 'description', 'renewable', 'applicaiton_deadline']

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
         raise Exception("Neither a Snippet nor a University!")
      return serializer.data