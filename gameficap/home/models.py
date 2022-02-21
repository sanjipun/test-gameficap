from contextlib import redirect_stdout
from django.db import models
from wagtail.core.fields import RichTextField, StreamField
from wagtail.core import blocks
from wagtail.core.models import Page
from wagtail.contrib.settings.models import BaseSetting, register_setting
from wagtail.images.blocks import ImageChooserBlock
from wagtail.admin.edit_handlers import (FieldPanel, StreamFieldPanel,MultiFieldPanel)
from wagtail.images.edit_handlers import ImageChooserPanel
from grapple.helpers import register_query_field
from grapple.models import(
    GraphQLString,
    GraphQLStreamfield,
    GraphQLImage
)
import graphene

  
@register_setting
class SocialMediaSettings(BaseSetting):
    facebook = models.URLField(
        help_text='Your Facebook page URL',
        blank=True)
    instagram = models.CharField(
        max_length=255, 
        blank=True,
        help_text='Your Instagram username, without the @')
    twitter = models.URLField(
        blank=True,
        help_text='Your Twitter Profile URL')
    youtube = models.URLField(
        blank=True,
        help_text='Your YouTube channel or user account URL')
    linkedin = models.URLField(
        blank=True,
        help_text='Your Linked Profile or user account URL')

    class Meta:
        verbose_name = 'social media accounts'

    panels = [
        FieldPanel('facebook'),
        FieldPanel('instagram'),
        FieldPanel('twitter'),
        FieldPanel('youtube'),
        FieldPanel('linkedin'),
    ]

    graphql_fields = [
        GraphQLString("facebook"),
        GraphQLString("instagram"),
        GraphQLString("twitter"),
        GraphQLString("youtube"),
        GraphQLString('linkedin'),
    ]

@register_query_field('header', 'headers', {
    "header_type": graphene.String(),
})
class Header(models.Model):
    HOME = 'HOME'
    TRENDING_NEWS = 'TRENDING_NEWS'
    LATEST_NEWS = 'LATEST_NEWS'
    HEADER_TYPES = [
        (HOME, HOME),
        (TRENDING_NEWS, TRENDING_NEWS),
        (LATEST_NEWS, LATEST_NEWS)
    ]
    header_type = models.CharField(
        max_length=30,
        choices=HEADER_TYPES,
        default=HOME,
    )
    title = models.CharField(max_length=255)
    paragraph = models.CharField(max_length=255)
    button_url = models.URLField(null=True, blank=True)
    button_text = models.CharField(max_length=255, null=True, blank=True)
    image = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=False,
        related_name="+",
    )

    graphql_fields = [
        GraphQLString('header_type'),
        GraphQLString('title'),
        GraphQLString('paragraph'),
        GraphQLString('button_text'),
        GraphQLString('button_url'),
        GraphQLImage('image')]

    panels = [
        FieldPanel('header_type'),
        FieldPanel('title'),
        FieldPanel('paragraph'),
        MultiFieldPanel(
            [
                FieldPanel('button_text'),
                FieldPanel('button_url'),
            ],
            heading="Button"
        ),
        ImageChooserPanel("image"),]

    def __str__(self):
        return self.title


# class Footer(models.Model):
#     pass


class NewsArticlePage(Page):
    author = models.CharField(max_length=255)
    date = models.DateField("Post date")
    body = StreamField(
        [
            ("heading", blocks.CharBlock(classname="full title")),
            ("paragraph", blocks.RichTextBlock()),
            ("image", ImageChooserBlock()),
        ]
    )

    content_panels = Page.content_panels + [
        FieldPanel("author"),
        FieldPanel("date"),
        StreamFieldPanel("body"),
    ]

    graphql_fields = [
        GraphQLString("heading"),
        GraphQLString("date"),
        GraphQLString("author"),
        GraphQLStreamfield("body"),
    ]



