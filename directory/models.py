from this import d
from django.db import models
from django.forms import CharField
from accounts.models import User
from django.urls import reverse
from autoslug import AutoSlugField


class Discipline(models.Model):
    name = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name

class Ranking(models.Model):
    name = models.CharField(max_length=200, null=True)
    rank = models.IntegerField(null=True)
    year = models.IntegerField(null=True)
    link = models.URLField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.name


class University(models.Model):
    name = models.CharField(max_length=200, null=True)
    slug = AutoSlugField(populate_from='name', always_update=True, unique = True, null=True)
    rank = models.CharField(max_length=200, blank=True)
    ranking = models.ManyToManyField(Ranking)
    rank_order = models.IntegerField(default=0, null=True, blank=True)
    image = models.ImageField(upload_to='university_images/', blank=True)
    image_url = models.URLField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True)
    description_sp = models.TextField(null=True, blank=True)
    about_sp = models.TextField(null=True, blank=True)
    student_life = models.TextField(null=True, blank=True)
    maps_link = models.URLField(max_length=200, null=True)
    institute_type = models.CharField(max_length=200, blank=True)
    campus_settings = models.CharField(max_length=200, blank=True)
    student_body_size = models.IntegerField(default=0, null=True, blank=True)
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
    sp_masters = models.BooleanField(default=False, null=True)
    sp_bachelors = models.BooleanField(default=False, null=True)
    sp_phd = models.BooleanField(default=False, null=True)

    #disabled = models.BooleanField(default=False, null=True, blank=True)
    #apply_link = models.URLField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Universities"


    def __str__(self):
        return self.name

class Duration(models.Model):
    type = models.CharField(max_length=200, null=True)
    duration = models.CharField(max_length=200, null=True)
    
    def __str__(self):
        return self.type + ' ' + self.duration

class ApplicationDeadline(models.Model):
    apply_deadline = models.CharField(max_length=200, null=True, blank=True)
    deadline_type = models.CharField(max_length=200, null=True, blank=True)
    apply_anytime = models.BooleanField(default=False, null=True)

    def __str__(self):
        return 'apply before: ' + self.apply_deadline if not self.apply_anytime else 'Apply anytime'


class Deadline(models.Model):
    start_date = models.CharField(max_length=200, null=True)
    application_deadlines = models.ManyToManyField(ApplicationDeadline)

    def __str__(self):
        return self.start_date


class AcademicRequirement(models.Model):
    name = models.CharField(max_length=200, null=True)
    score = models.FloatField(null=True)
    no_req = models.BooleanField(default=False, null=False)

    def __str__(self):
        return self.name 


class Program(models.Model):
    name = models.CharField(max_length=200, null=True)
    slug = AutoSlugField(populate_from='name', always_update=True, unique = True, null=True)
    image_url = models.URLField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    language = models.CharField(max_length=200, null=True)
    university = models.ForeignKey(University, on_delete=models.CASCADE, null=True)
    durations = models.ManyToManyField(Duration)
    deadlines = models.ManyToManyField(Deadline)
    credits = models.CharField(max_length=200, null=True)
    delivered = models.CharField(max_length=200, null=True)
    disciplines = models.ManyToManyField(Discipline)
    link_to_website = models.URLField(null=True)
    program_structure = models.TextField(null=True)
    academic_requirements = models.ManyToManyField(AcademicRequirement)
    other_requirements = models.TextField(null=True, blank=False)
    tuition_fee = models.IntegerField(null=True)
    tuition_fee_currency = models.CharField(max_length=50, null=True)
    tuition_fee_duration = models.CharField(max_length = 50, null=True)
    living_cost_min = models.IntegerField(null=True, blank=True)
    living_cost_max = models.IntegerField(null=True, blank=True)
    location = models.CharField(max_length=200, blank=True, null=True)


    def __str__(self):
        return self.name 


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
    