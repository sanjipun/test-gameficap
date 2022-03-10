from wagtail.core import hooks
from .mutation import CommentMutation
from .query import ArticleCommentQuery


@hooks.register("register_schema_mutation")
def register_create_comment_mutation(mutation_mixins):
    mutation_mixins.append(CommentMutation)
