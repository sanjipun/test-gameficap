from cProfile import label
from django.db import models
from django import forms
from django.db.models.aggregates import Count
from django.conf import settings
from wagtail.core.fields import RichTextField, StreamField
from wagtail.core import blocks
from wagtail.core.models import Page
from wagtail.images.blocks import ImageChooserBlock
from wagtail.admin.edit_handlers import (
    FieldPanel,
    StreamFieldPanel,
    MultiFieldPanel,
    InlinePanel
    )
from wagtail.images.edit_handlers import ImageChooserPanel
from blog.helpers import register_query_field
from django_comments_xtd.models import XtdComment

from grapple.helpers import register_paginated_query_field
from grapple.models import(
    GraphQLString,
    GraphQLStreamfield,
    GraphQLImage,
    GraphQLTag,
    GraphQLForeignKey,
    GraphQLCollection,
    GraphQLInt,
    GraphQLBoolean
)
from wagtail.snippets.models import register_snippet
from modelcluster.fields import ParentalKey, ParentalManyToManyField
from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.models import TagBase, ItemBase
import graphene
import datetime


@register_snippet
class ArticlePageTag(TagBase):
    free_tagging = True

    class Meta:
        verbose_name = "Article Tag"
        verbose_name_plural = "Article Tags"

    graphql_fields = [
        GraphQLString("name"),
    ]
    


class TaggedArticlePage(ItemBase):
    tag = models.ForeignKey(
        ArticlePageTag, 
        related_name="tagged_artcles_pages", 
        on_delete=models.CASCADE
    )
    content_object = ParentalKey(
        to='blog.ArticlePage',
        on_delete=models.CASCADE,
        related_name='tagged_items'
    )

@register_query_field(
    "article", query_params= {
        "id": graphene.Int(),
        "slug": graphene.String(),
        "categories": graphene.Int(),
        }
)
class ArticlePage(Page):
    author = models.CharField(max_length=255)
    date = models.DateField("Post date")
    tags = ClusterTaggableManager(through='blog.TaggedArticlePage', blank=True)
    categories = ParentalManyToManyField("blog.ArticleCategory", blank=True)
    body = StreamField(
        [
            ("heading", blocks.CharBlock(classname="full title")),
            ("paragraph", blocks.RichTextBlock()),
            ("image", ImageChooserBlock()),
        ]
    )

    @property
    def related_articles(self, max_items=5):
        tags = self.tags.all()
 
        matches = ArticlePage.objects.filter(tags__in=tags).live().annotate(Count('title'))
        matches = matches.exclude(pk=self.pk)
 
        related = matches.order_by('-title__count')
        return related[:max_items]


    content_panels = Page.content_panels + [
        FieldPanel("author"),
        FieldPanel("date"),
        FieldPanel("tags"),
        MultiFieldPanel(
            [
                FieldPanel("categories", widget=forms.CheckboxSelectMultiple)
            ],
            heading="Categories"
        ),
        StreamFieldPanel("body"),
    ]

    graphql_fields = [
        GraphQLString("heading"),
        GraphQLString("date"),
        GraphQLString("author"),
        GraphQLTag("tags"),
        GraphQLStreamfield("body"),
        GraphQLCollection(
            GraphQLForeignKey,
            "categories", 
            "blog.ArticleCategory"
        ),
        GraphQLCollection(
            GraphQLForeignKey,
            "related_articles",
            "blog.ArticlePage"
        ),
        GraphQLCollection(
            GraphQLForeignKey,
            "article_comments",
            "blog.ArticleComment"
        )
    
    ]


@register_snippet
class ArticleCategory(models.Model):
    name = models.CharField(max_length=255)
    icon = models.ForeignKey(
        "wagtailimages.Image",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="+",
    )

    panels = [
        FieldPanel("name"),
        ImageChooserPanel('icon'),
    ]

    graphql_fields = [
        GraphQLString("name"),
        GraphQLImage("icon")
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = " Article Category"
        verbose_name_plural = "Article Categories"


class ArticleComment(XtdComment):
    page = ParentalKey(
        "blog.ArticlePage", 
        on_delete=models.CASCADE, 
        related_name="article_comments"
    )

    graphql_fields = [
        GraphQLString("user_name"),
        GraphQLString("comment"),
        GraphQLString("submit_date"),
        GraphQLInt("thread_id"),
        GraphQLInt("parent_id"),
        GraphQLInt("level"),
        GraphQLInt("order")
    ]