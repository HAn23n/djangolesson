# Register your models here.
from django.contrib import admin
from .models import Member,LookUpType,LookUpValue

# Register your models here.

class MemberAdmin(admin.ModelAdmin):
    list_display = ("id","id_card","firstname","lastname","birth_date","address","phone_number","email","type_status","inactive_fg","create","update")

class LookType(admin.ModelAdmin):
    list_display = ("type_code", "type_description", "screen_mapping_name", "system_flag", "timestamp", "update", "create")

class LookValue(admin.ModelAdmin):
    list_display = ("id", "value_code", "value_description", "type_code", "attribute1", "attribute2", "attribute3", "attribute4", "attribute5", "data_json", "inactive_fg", "create", "update")

admin.site.register(LookUpType, LookType)
admin.site.register(LookUpValue, LookValue)
admin.site.register(Member, MemberAdmin)