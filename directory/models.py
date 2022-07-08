from django.db import models
from accounts.models import User
from django.urls import reverse
from autoslug import AutoSlugField


class University(models.Model):
    name = models.CharField(max_length=200, null=True)
    slug = AutoSlugField(populate_from='name', always_update=True, unique = True, null=True)
    rank = models.CharField(max_length=200, blank=True)
    rank_order = models.IntegerField(default=0, null=True, blank=True)
    image = models.ImageField(upload_to='university_images/', blank=True)
    description = models.TextField(blank=True)
    institute_type = models.CharField(max_length=200, blank=True)
    campus_settings = models.CharField(max_length=200, blank=True)
    student_body_size = models.IntegerField(default=0)
    prince_range = models.CharField(max_length = 50, null=True, blank=True)
    scores_overall =  models.CharField(max_length = 50, null=True, blank=True)
    scores_overall_rank =models.CharField(max_length = 50, null=True, blank=True)
    scores_teaching =  models.CharField(max_length = 50, null=True, blank=True)
    scores_teaching_rank =  models.CharField(max_length = 50, null=True, blank=True)
    scores_research = models.CharField(max_length = 50, null=True, blank=True)
    scores_research_rank = models.CharField(max_length = 50, null=True, blank=True)
    scores_citations =  models.CharField(max_length = 50, null=True, blank=True)
    scores_citations_rank = models.CharField(max_length = 50, null=True, blank=True)
    scores_industry_income =  models.CharField(max_length = 50, null=True, blank=True)
    scores_industry_income_rank = models.CharField(max_length = 50, null=True, blank=True)
    scores_international_outlook =  models.CharField(max_length = 50, null=True, blank=True)
    scores_international_outlook_rank =  models.CharField(max_length = 50, null=True, blank=True)
    #record_type = models.CharField(max_length=200, null=True, blank=True) 
    #member_level = models.IntegerField(null=True, blank=True)
    #url = models.URLField(null=True, blank=True)
    #nid = models.IntegerField(null=True, blank=True)
    location = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    stats_student_staff_ratio = models.FloatField(null=True, blank=True)
    stats_pc_intl_students = models.CharField(max_length=50, null=True, blank=True)
    stats_female_male_ratio = models.CharField(max_length=50, null=True, blank=True)
    #aliases = models.CharField(max_length=200, null=True, blank=True)
    subjects_offered = models.TextField(null=True, blank=True)
    closed = models.BooleanField(default=False, null=True, blank=True)
    unaccredited = models.BooleanField(default=False, null=True, blank=True)
    #disabled = models.BooleanField(default=False, null=True, blank=True)
    #apply_link = models.URLField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Universities"

    # def get_url(self):
    #     retun str(self.slug) + '/'

    def __str__(self):
        return self.name

    # def get_absolute_url(self):
    #     return reverse("university-detail", kwargs={"pk": self.pk})
    

class Program(models.Model):
    name = models.CharField(max_length=200, null=True)
    slug = AutoSlugField(populate_from='name', always_update=True, unique = True, null=True)
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    degree_level = models.CharField(max_length=200, blank=True, null=True)
    years_of_study = models.IntegerField(default=0)
    format_name = models.CharField(max_length=200, blank=True, null=True)
    language = models.CharField(max_length=200, blank=True, null=True)
    schedule = models.CharField(max_length=200, blank=True, null=True)
    application_deadline = models.DateField(blank=True, null=True)
    is_favorite = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("program-detail", kwargs={"pk": self.pk})

from django.core.validators import URLValidator

class Scholarship(models.Model):
    name = models.CharField(max_length=200, null=True)
    slug = AutoSlugField(populate_from='name', always_update=True, unique = True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    more_info = models.TextField(blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    
    #applicable_majors
    #ethnicity = 
    #enrollment_level = 
    #other = 
    #in addition?

    # ---

    gender = models.CharField(max_length=200, blank=True, null=True)
    award_ammount = models.CharField(max_length=100, blank=True, null=True)
    application_deadline = models.CharField(max_length=100, blank=True, null=True)
    nationality_requirements = models.TextField(blank=True, null=True)
    applicable_majors = models.TextField(blank=True, null=True)
    host_institution = models.CharField(max_length=200, blank=True, null=True)
    includes = models.TextField(blank=True, null=True)
    contact_name = models.CharField(max_length=200, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField(max_length=200, blank=True, null=True)
    fax = models.CharField(max_length=100, blank=True, null=True)
    link = models.TextField(validators=[URLValidator()], blank=True, null=True)

    #------- Those does not exist in every detail page.
    # elegibility_critetial = list of strings
    # recommendations = list of strings
    # application procedure and requirements = list of strings

    renewable = models.BooleanField(default=False, blank=True, null=True)
    competition_level = models.CharField(max_length=200, blank=True, null=True)
    effort_level = models.CharField(max_length=200, blank=True, null=True)
    num_awards_granted = models.IntegerField(default=0, blank=True, null=True)

    
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("scholarship-detail", kwargs={"pk": self.pk})
    

class Post(models.Model):
    title = models.CharField(max_length=200, null=True)
    slug = AutoSlugField(populate_from='title', always_update=True, unique = True, null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    headline = models.CharField(max_length=200, blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("post-detail", kwargs={"pk": self.pk})
    