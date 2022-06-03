from re import T
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    date_of_birth = models.DateField()
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True)
    #grade = models.IntegerField()
    #hobies
    bio = models.TextField(blank=True)
    desired_job = models.CharField(max_length=200, blank=True)
    desired_degree = models.CharField(max_length=200, blank=True)
    desired_location = models.CharField(max_length=200, blank=True)


class Accomplishment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField()
    file = models.FileField(upload_to='accomplishments/')
    date = models.DateTimeField(auto_now_add=True)
    validated_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


class Skill(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    score = models.IntegerField(default=0, blank=True, null=True)
    accomplishment = models.ForeignKey(Accomplishment, on_delete=models.CASCADE, null=True)


class Recommendation(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    text = models.TextField()
    file = models.FileField(upload_to='recommendations/')
    date = models.DateTimeField(auto_now_add=True)


class OrganisationUser(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, primary_key=True)
    admin_user = models.BooleanField(default=False)
    marketing_user = models.BooleanField(default=False)
    analytics_user = models.BooleanField(default=False)
    curator_user = models.BooleanField(default=False)
    publisher_user = models.BooleanField(default=False)