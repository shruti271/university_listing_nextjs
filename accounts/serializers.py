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


class ResetpasswordSerializer(serializers.HyperlinkedModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ['email', 'password']
        read_only_fields = ['email']

    def save(self):
        email=self.validated_data['email']
        password=self.validated_data['password']

        if User.objects.filter(email=email).exists():

            user=User.objects.get(email=email)

            user.set_password(password)
            user.save()
            return user
        else:
            raise serializers.ValidationError({'error':'User does not exist'})