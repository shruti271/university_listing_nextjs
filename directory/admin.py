from django.contrib import admin
from directory.models import AcademicRequirement, ApplicationDeadline, Deadline, Discipline, Duration, University, Program, Scholarship, Post

admin.site.register(University)
admin.site.register(Program)
admin.site.register(Scholarship)
admin.site.register(Post)

admin.site.register(Discipline)
admin.site.register(Duration)
admin.site.register(AcademicRequirement)
admin.site.register(Deadline)
admin.site.register(ApplicationDeadline)

