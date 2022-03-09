import graphene
from django.contrib.auth import authenticate, login

from .query import UserType
from .manager import UserManager

class SignUpMutation(graphene.Mutation):
    user = graphene.Field(UserType)
    session_id = graphene.String()

    class Arguments:
        first_name = graphene.String()
        last_name =  graphene.String()
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    def mutate(root, info, **kwargs):
        obj = UserManager().create(kwargs)
        return SignUpMutation(**obj)


class LoginMutation(graphene.Mutation):
    user = graphene.Field(UserType)
    session_id = graphene.String()

    class Arguments:
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    def mutate(root, info, email, password):
        user = authenticate(username=email, password=password)
        if user is not None:
            login(info.context, user)
            session_id = info.context.session.session_key
        return LoginMutation(user=user, session_id=session_id)


class UserMutation(graphene.ObjectType):
    create_user = SignUpMutation.Field()
    login_user = LoginMutation.Field()