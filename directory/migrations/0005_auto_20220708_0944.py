# Generated by Django 3.2.13 on 2022-07-08 09:44

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('directory', '0004_auto_20220708_0939'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scholarship',
            name='contact_name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='scholarship',
            name='email',
            field=models.EmailField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='scholarship',
            name='host_institution',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='scholarship',
            name='includes',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='scholarship',
            name='link',
            field=models.TextField(blank=True, null=True, validators=[django.core.validators.URLValidator()]),
        ),
        migrations.AlterField(
            model_name='scholarship',
            name='nationality_requirements',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='scholarship',
            name='phone',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]