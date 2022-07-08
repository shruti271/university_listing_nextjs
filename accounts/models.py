from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    #is_onboarded = models.BooleanField(default=False, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    current_location = models.CharField(max_length=200, null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    institutional_level = models.CharField(max_length=200, null=True, blank=True)
    institute_name = models.CharField(max_length=200, null=True, blank=True)
    institute_location = models.CharField(max_length=200, null=True, blank=True)
    graduated = models.BooleanField(max_length=200, null=True, blank=True)
    graduated_date = models.DateField(null=True, blank=True)
    desired_profession = models.CharField(max_length=200, blank=True, null=True)
    desired_major = models.CharField(max_length=200, blank=True, null=True)
    #grade = models.IntegerField()
    #hobies
    bio = models.TextField(blank=True)
    desired_degree = models.CharField(max_length=200, blank=True, null=True)
    desired_location = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.user.username



class Accomplishment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True)
    description = models.TextField(null=True)
    file = models.FileField(upload_to='accomplishments/', null=True)
    date = models.DateTimeField(auto_now_add=True)
    validated_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


class Skill(models.Model):
    name = models.CharField(max_length=200, null=True)
    description = models.TextField(blank=True, null=True)
    score = models.IntegerField(default=0, blank=True, null=True)
    accomplishment = models.ForeignKey(Accomplishment, on_delete=models.CASCADE, null=True)


class Recommendation(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, null=True)
    text = models.TextField(null=True)
    file = models.FileField(upload_to='recommendations/', null=True)
    date = models.DateTimeField(auto_now_add=True)


class OrganisationUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    admin_user = models.BooleanField(default=False, null=True)
    marketing_user = models.BooleanField(default=False, null=True)
    analytics_user = models.BooleanField(default=False, null=True)
    curator_user = models.BooleanField(default=False, null=True)
    publisher_user = models.BooleanField(default=False, null=True)