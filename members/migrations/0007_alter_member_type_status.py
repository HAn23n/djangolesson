# Generated by Django 5.0.3 on 2024-04-03 07:40

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0006_member_type_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='type_status',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='member_type', to='members.lookupvalue'),
        ),
    ]
