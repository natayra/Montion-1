# Generated by Django 3.0.7 on 2020-07-02 17:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0002_registration_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registration',
            name='used',
        ),
    ]
