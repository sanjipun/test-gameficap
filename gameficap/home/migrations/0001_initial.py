# Generated by Django 3.2.12 on 2022-03-03 07:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0066_collection_management_permissions'),
        ('wagtailimages', '0023_add_choose_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='SocialMediaSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('facebook', models.URLField(blank=True, help_text='Your Facebook page URL')),
                ('instagram', models.CharField(blank=True, help_text='Your Instagram username, without the @', max_length=255)),
                ('twitter', models.URLField(blank=True, help_text='Your Twitter Profile URL')),
                ('youtube', models.URLField(blank=True, help_text='Your YouTube channel or user account URL')),
                ('linkedin', models.URLField(blank=True, help_text='Your Linked Profile or user account URL')),
                ('site', models.OneToOneField(editable=False, on_delete=django.db.models.deletion.CASCADE, to='wagtailcore.site')),
            ],
            options={
                'verbose_name': 'social media accounts',
            },
        ),
        migrations.CreateModel(
            name='Header',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('header_type', models.CharField(choices=[('HOME', 'HOME'), ('TRENDING_NEWS', 'TRENDING_NEWS'), ('LATEST_NEWS', 'LATEST_NEWS')], default='HOME', max_length=30)),
                ('title', models.CharField(max_length=255)),
                ('paragraph', models.CharField(max_length=255)),
                ('button_url', models.URLField(blank=True, null=True)),
                ('button_text', models.CharField(blank=True, max_length=255, null=True)),
                ('image', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.image')),
            ],
        ),
    ]

