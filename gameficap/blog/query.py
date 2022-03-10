import graphene
from graphene_django import DjangoObjectType, filter

from blog.models import ArticleComment

class CommentType(DjangoObjectType):
    class Meta:
        model = ArticleComment
        connection_class = graphene.Connection

class ArticleCommentQuery(graphene.ObjectType):
    all_article_comments = filter.DjangoFilterConnectionField(CommentType)
