from django.db import models




   
class LookUpType(models.Model):
    type_code = models.CharField(primary_key=True,max_length=250,blank=False,null=False)
    type_description = models.TextField(max_length=1000,blank=True,null=True)
    screen_mapping_name = models.CharField(max_length=255,blank=True,null=False)
    system_flag = models.BooleanField(default=False, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True,auto_now=False)
    update = models.DateTimeField(auto_now_add=False,auto_now=True)
    create = models.DateTimeField(auto_now_add=True,auto_now=False,blank=True,null=True)

    def __str__(self):
        return self.type_code
    



class LookUpValue(models.Model):
    id = models.AutoField(primary_key=True)
    value_code = models.CharField(max_length=250,null=True,blank=True,db_index=True)
    value_description = models.CharField(max_length=2000, null=True, blank=True)
    type_code = models.ForeignKey(LookUpType, on_delete=models.DO_NOTHING)
    attribute1 = models.CharField(max_length=2000,null=True,blank=True)
    attribute2 = models.CharField(max_length=2000,null=True,blank=True)
    attribute3 = models.CharField(max_length=2000,null=True,blank=True)
    attribute4 = models.CharField(max_length=2000,null=True,blank=True)
    attribute5 = models.CharField(max_length=2000,null=True,blank=True)
    data_json = models.JSONField(null=True,blank=True)
    inactive_fg = models.BooleanField(default=False,blank=True)
    create = models.DateTimeField(auto_now_add=True,auto_now=False,null=False)
    update = models.DateTimeField(auto_now_add=True,auto_now=False,null=False)

    def __nonzero__(self):
        return self.id
    
    def __str__(self):
        return self.value_code 


class Member(models.Model):
    firstname = models.CharField(max_length=50,blank=True,null=False)
    lastname = models.CharField(max_length=50,blank=True,null=False)
    birth_date = models.DateField(blank=False)
    address = models.CharField(max_length=255,blank=True,null=False)
    phone_number = models.CharField(max_length=10,blank=True,null=False)
    email = models.EmailField(max_length=255,blank=True,null=False)
    id_card = models.CharField(max_length=13,blank=True,null=False)
    type_status = models.ForeignKey(LookUpValue, on_delete=models.DO_NOTHING, blank=True, null=True, related_name='member_type')


    inactive_fg = models.BooleanField(default=False,blank=True)
    
    create = models.DateTimeField(auto_now_add=True,auto_now=False)
    update = models.DateTimeField(auto_now_add=False,auto_now=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    
    def __nonzero__(self):
        return self.id