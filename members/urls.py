from django.urls import path
from . import views


urlpatterns = [
    path('my/',views. first,name=' first'),
    path('members/', views.members, name='members'),
    path('members/details/<int:id>3',views.details,name='details'),
    path('',views.home,name='home'),
    path('add/',views.add,name='add'),
    path('members/update/<int:id>/', views.update, name='update'),
    path('members/<int:id>', views.delete, name='delete'),
    path('ul/',views.ul,name='ul'),
    path('datamember/',views.data_members,name="data_member"),
    path('datamember/details/<int:id>',views.data_details,name='data_details'),
    # path('views/',views.add_member,as_view),
    path('line/',views.line,name='line'),
    
    
    path('login/',views.login,name='login'),
    path('login2/',views.login2,name='login2'),
    path('login3/',views.login3,name='login3'),
    path('login4/',views.login4,name='login4'),

    path('pokemon/',views.pokemon,name='pokemon'),

    path('home/',views.home2,name='home2'),

    path('web/',views.webA,name='webA'),

    path('nike/',views.nike,name='nike')
]