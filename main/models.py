from django.db import models
from accounts.models import User

from django.urls import reverse
class University(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    city = models.CharField(max_length=200)
    UAE_Ranking = models.IntegerField(default=0)
    image = models.ImageField(upload_to='university_images/', blank=True)
    institute_type = models.CharField(max_length=200, blank=True)
    campus_settings = models.CharField(max_length=200, blank=True)
    student_body_size = models.IntegerField(default=0)
    prince_range = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("university-detail", kwargs={"pk": self.pk})
    

class Program(models.Model):
    name = models.CharField(max_length=200)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    degree_level = models.CharField(max_length=200, blank=True)
    years_of_study = models.IntegerField(default=0)
    format_name = models.CharField(max_length=200, blank=True)
    language = models.CharField(max_length=200, blank=True)
    schedule = models.CharField(max_length=200, blank=True)
    application_deadline = models.DateField(blank=True, null=True)
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("program-detail", kwargs={"pk": self.pk})

class Scholarship(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(blank=True)
    location = models.CharField(max_length=200, blank=True)
    field = models.CharField(max_length=200, blank=True)
    #gender = models.CharField
    #ethnicity = 
    #enrollment_level = 
    #other = 
    #award_ammount = 
    #slug
    applicaiton_deadline = models.DateField(blank=True, null=True)
    renewable = models.BooleanField(default=False)
    competition_level = models.CharField(max_length=200, blank=True)
    effort_level = models.CharField(max_length=200, blank=True)
    num_awards_granted = models.IntegerField(default=0)

    
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("scholarship-detail", kwargs={"pk": self.pk})
    

class Post(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    headline = models.CharField(max_length=200)
    content = models.TextField()
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post-detail", kwargs={"pk": self.pk})
    