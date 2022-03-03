import graphene
import inspect
from types import MethodType

from django.utils.translation import gettext_lazy as _
from graphene.utils.str_converters import to_camel_case
from wagtail.core.models import Page

from grapple.registry import registry
from grapple.settings import grapple_settings
from grapple.types.streamfield import StreamFieldInterface


streamfield_types = []
field_middlewares = {}

def register_graphql_schema(schema_cls):
    registry.schema.append(schema_cls)
    return schema_cls


def register_field_middleware(field_name: str, middleware):
    assert isinstance(middleware, list), "middleware should be list but got {}.".format(
        type(middleware)
    )
    if grapple_settings.AUTO_CAMELCASE:
        field_name = to_camel_case(field_name)

    if field_name in field_middlewares:
        field_middlewares[field_name] += middleware
    else:
        field_middlewares[field_name] = middleware


def register_query_field(
    field_name,
    plural_field_name=None,
    query_params=None,
    required=False,
    plural_required=False,
    plural_item_required=False,
    middleware=None,
):  
    from grapple.types.structures import QuerySetList
    from grapple.utils import resolve_queryset

    if not plural_field_name:
        plural_field_name = field_name + "s"

    def inner(cls):
        field_type = lambda: registry.models[cls]
        field_query_params = query_params
        if field_query_params is None:
            field_query_params = {"id": graphene.Int()}

            if issubclass(cls, Page):
                field_query_params["slug"] = graphene.Argument(
                    graphene.String, description=_("The page slug.")
                )
                field_query_params["url_path"] = graphene.Argument(
                    graphene.String, description=_("The url path.")
                )
                field_query_params["token"] = graphene.Argument(
                    graphene.String, description=_("The preview token.")
                )

        def Mixin():
            # Generic methods to get all and query one model instance.
          

            def resolve_singular(self, _, info, **kwargs):
                # If no filters then return nothing,
                if not kwargs:
                    return None

                try:
                    # If is a Page then only query live/public pages.
                    if issubclass(cls, Page):
                        if "token" in kwargs and hasattr(
                            cls, "get_page_from_preview_token"
                        ):
                            return cls.get_page_from_preview_token(kwargs.get("token"))

                        qs = cls.objects.live().public()
                        url_path = kwargs.pop("url_path", None)
                        if url_path:
                            if not url_path.endswith("/"):
                                url_path += "/"
                            return qs.filter(
                                url_path__endswith=url_path, **kwargs
                            ).first()

                        return qs.get(**kwargs)

                    return cls.objects.get(**kwargs)
                except Exception as e:
                    return None

            def resolve_plural(self, _, info, **kwargs):
                qs = cls.objects
                if issubclass(cls, Page):
                    qs = qs.live().public()
                    qs = qs.filter(**kwargs)
                    if "order" not in kwargs:
                        kwargs["order"] = "-first_published_at"                
                return resolve_queryset(qs.all(), info, **kwargs)

            # Create schema and add resolve methods
            schema = type(cls.__name__ + "Query", (), {})

            singular_field_type = field_type
            if required:
                singular_field_type = graphene.NonNull(field_type)

            setattr(
                schema,
                field_name,
                graphene.Field(singular_field_type, **field_query_params), 
            )

            plural_field_type = field_type
            if plural_item_required:
                plural_field_type = graphene.NonNull(field_type)

            setattr(
                schema,
                plural_field_name,
                QuerySetList(plural_field_type, required=plural_required, **field_query_params), 
            )

            setattr(
                schema, "resolve_" + field_name, MethodType(resolve_singular, schema)
            )
            setattr(
                schema,
                "resolve_" + plural_field_name,
                MethodType(resolve_plural, schema),
            )
            return schema

        # Send schema to Grapple schema.
        register_graphql_schema(Mixin())
        return cls

    if middleware is not None:
        register_field_middleware(field_name, middleware)
        register_field_middleware(plural_field_name, middleware)

    return inner


