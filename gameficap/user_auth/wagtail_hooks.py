from wagtail.core import hooks
from .mutation import UserManager, UserMutation


@hooks.register("register_schema_mutation")
def register_signup_mutation(mutation_mixins):
    mutation_mixins.append(UserMutation)
