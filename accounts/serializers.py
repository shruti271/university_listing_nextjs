from rest_framework import serializers
from accounts.models import User, Student

class ClosedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email']



class ClosedStudentSerializer(serializers.ModelSerializer):
    profile_picture = serializers.SerializerMethodField('get_profile_photo_url')
    details = ClosedUserSerializer(source='user', read_only=True)


    class Meta:
        model = Student
        fields = ['details', 'date_of_birth', 'profile_picture', 'bio']
        read_only_fields = ['details', 'date_of_birth', 'profile_picture', 'bio']

    def get_profile_photo_url(self, obj: Student):
        request = self.context.get("request")
        if obj.profile_picture:
            return request.build_absolute_uri(obj.profile_picture.url)
        else:
            return None