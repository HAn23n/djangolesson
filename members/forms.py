
from django import forms
from .models import Member,LookUpType,LookUpValue

class LookUpTypeForm(forms.ModelForm):
    class Meta:
        model = LookUpType
        fields = ['type_code', 'type_description', 'screen_mapping_name', 'system_flag']



class LookUpValueForm(forms.ModelForm):
    class Meta:
        model = LookUpValue
        fields = ['id','value_code','value_description',"type_code","attribute1","attribute2","attribute3","attribute4","attribute5","data_json","inactive_fg"]


class MemberForm(forms.ModelForm):
    class Meta:
        model = Member
        fields = ['id_card','firstname', 'lastname', 'birth_date', 'address', 'phone_number', 'email','type_status','inactive_fg']
