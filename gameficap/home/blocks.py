from turtle import title
from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock

from grapple.helpers import register_streamfield_block
from grapple.models import(
    GraphQLString,
)

@register_streamfield_block
class ButtonBlock(blocks.StructBlock):
    button_text = blocks.CharBlock(
        required=True, 
        max_length=50, 
        label="Text"
    )
    button_link = blocks.CharBlock(
        required=True, 
        max_length=255, 
        label="Link"
    )
    graphql_fields = [
        GraphQLString("button_text"), 
        GraphQLString("button_link")
    ]
