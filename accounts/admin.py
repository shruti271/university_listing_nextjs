from django.contrib import admin
from .models import User, Student, Accomplishment, Skill, Recommendation, OrganisationUser

admin.site.register(User)
admin.site.register(Student)
admin.site.register(Accomplishment)
admin.site.register(Skill)
admin.site.register(Recommendation)
admin.site.register(OrganisationUser)
