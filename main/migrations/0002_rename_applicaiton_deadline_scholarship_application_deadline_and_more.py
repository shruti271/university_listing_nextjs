# Generated by Django 4.0 on 2022-06-07 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='scholarship',
            old_name='applicaiton_deadline',
            new_name='application_deadline',
        ),
        migrations.AddField(
            model_name='university',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]