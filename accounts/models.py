from re import T
from django.db import models
from django.contrib.auth.models import AbstractUser
from compo_server.main.models import University


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
    skills = models.ManyToManyField("accounts.Skill", verbose_name=("Skills"), blank=True)


class Skill(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    score = models.IntegerField(default=0, blank=True, null=True)


class Recommendation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    file = models.FileField(upload_to='recommendations/')
    date = models.DateTimeField(auto_now_add=True)

class Accomplishment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    file = models.FileField(upload_to='accomplishments/')
    date = models.DateTimeField(auto_now_add=True)

class OrganisationUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    university = models.ForeignKey(University, on_delete=models.CASCADE)