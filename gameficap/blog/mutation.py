import graphene
from django.contrib.contenttypes.models import ContentType
from django.contrib.sites.shortcuts import get_current_site
from blog.models import ArticleComment
from .query import CommentType


class CreateCommentMutation(graphene.Mutation):
    comment = graphene.Field(CommentType)

    class Arguments:
        user_name = graphene.String()
        comment =  graphene.String(required=True)
        article_page_id = graphene.Int(required=True)

    # @login_required
    def mutate(root, info, **kwargs):
        user_name = kwargs.get('user_name')
        comment = kwargs.get('comment')
        article_page_id = kwargs.get('article_page_id')

        comment_instance, _ = ArticleComment.objects.update_or_create(
            user_name=user_name,
            comment = comment,
            page_id = article_page_id,
            content_type = ContentType.objects.get_for_model(ArticleComment),
            site = get_current_site(info.context)

        )
        return CreateCommentMutation(comment=comment_instance)


class CommentMutation(graphene.ObjectType):
    create_comment = CreateCommentMutation.Field()
