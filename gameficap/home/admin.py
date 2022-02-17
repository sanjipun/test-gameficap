
from wagtail.contrib.modeladmin.options import (
    ModelAdmin,
    modeladmin_register,
)
from .models import Header


class HeaderAdmin(ModelAdmin):
    """Header admin."""

    model = Header
    menu_label = "Headers"
    menu_icon = "pick"
    menu_order = 290
    add_to_settings_menu = False
    exclude_from_explorer = False
    list_display = ("header_type", "title", "paragraph",)
    search_fields = ("header_type", "title",)

modeladmin_register(HeaderAdmin) 