from django.http import HttpResponse
from django.template import loader
from .models import Member,LookUpType,LookUpValue
from django.shortcuts import render,redirect
from .forms import MemberForm
from django.db.models import Q
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.views.decorators.http import require_POST
from django.urls import reverse
from django.http import HttpResponseRedirect


# test web
def line(request):
    template = loader.get_template('line_login.html')
    return HttpResponse(template.render())

def login(request):
    template = loader.get_template('login.html')
    return HttpResponse(template.render())

def login2(request):
    template = loader.get_template('login2.html')
    return HttpResponse(template.render())

def login3(request):
    template = loader.get_template('login3.html')
    return HttpResponse(template.render())

def login4(request):
    template = loader.get_template('login4.html')
    return HttpResponse(template.render())

def home2(request):
    template = loader.get_template('home2.html')
    return HttpResponse(template.render())

def webA(request):
    template =loader.get_template('web.html')
    return HttpResponse(template.render())

def pokemon(request):
    template = loader.get_template('pokemon.html')
    return HttpResponse(template.render())


def nike(request):
    template = loader.get_template('nike.html')
    return HttpResponse(template.render())




def data_members(request):
    members = Member.objects.all()
    return render(request, 'data_member.html', {'members': members})

def data_details(request,id):
    member = Member.objects.get(id=id)
    template =loader.get_template('details.html')
    context ={
        'member':member,
    }
    return  HttpResponse(template.render(context,request))

def members(request):
    if 'q' in request.GET:
        q = request.GET['q']
        members = Member.objects.filter(
        Q(firstname__icontains=q) |
        Q(lastname__icontains=q) |
        Q(birth_date__icontains=q) |
        Q(address__icontains=q) |
        Q(phone_number__icontains=q) |
        Q(email__icontains=q) |
        Q(id_card__icontains=q) |
        Q(type_status__value_code__icontains=q) )
    else:
        members = Member.objects.all()
        
    template = loader.get_template('all_member.html')
    context ={
        'members': members
    }
    return HttpResponse(template.render(context,request))



def details(request,id):
    member =Member.objects.get(id=id)
    template = loader.get_template('details.html')
    context ={
        'member':member,
    }
    return HttpResponse(template.render(context,request))



def first(request):
    template = loader.get_template('myfirst.html')
    return HttpResponse(template.render())

def home(request):
    template = loader.get_template('main.html')
    return HttpResponse(template.render())

def ul(request):
    template = loader.get_template('ul.html')
    return HttpResponse(template.render())

def add(request):
    try:
        member_form = MemberForm(request.POST)
        if member_form.is_valid():
            new_member = member_form.save()
            # Redirect to a page that displays the newly added member
            return HttpResponseRedirect(reverse('members'))
        else:
            errors = member_form.errors.as_json()
            return JsonResponse({'success': False, 'errors': errors})
    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)})
# def add(request):
#     try:
#         if request.method == "POST":
#             member = MemberForm(request.POST)
#             print(member)
#             member.save()  
#             return redirect('members')
        
#         else:
#             member = MemberForm()
           
#         return render(request, 'all_member.html', {'member': member})
    
#     except Exception as a:
#         print(a) 



# def update(request,id):
#     try:
#         print(id)
#         member = Member.objects.get(id=id)
#         print(member)
#         if request.method == "POST":
#             member = MemberForm(request.POST, instance=member)
#             member.save()
#             return redirect('members')
#         else:
#             member = MemberForm(instance=member)
#         return render(request, 'all_member.html', {'member': member})
#     except Exception as e:
#         print(e) 



def update(request, id):
    try:
        member = Member.objects.get(id=id)
        
        if request.method == "POST":
            member_form = MemberForm(request.POST, instance=member)
            if member_form.is_valid():
                member_form.save()
                member_dict = model_to_dict(member)
                return JsonResponse({'success': True, 'member': member_dict})
            else:
                errors = member_form.errors.as_json()
                return JsonResponse({'success': False, 'errors': errors})
        
        member_form = MemberForm(instance=member)
        return render(request, 'all_member.html', {'member': member_form})
    
    except Exception as e:
        print(e)
        return JsonResponse({'success': False, 'error': str(e)})


# def update(request, id):
#     try:
#         member = Member.objects.get(id=id)
#         if request.method == "POST":
#             member_form = MemberForm(request.POST, instance=member)
#             if member_form.is_valid():
#                 member_form.save()
#                 return JsonResponse({'success': True})
#             else:
#                 errors = member_form.errors
#                 return JsonResponse({'success': False, 'errors': errors})
#         else:
#             member_form = MemberForm(instance=member)
#             return render(request, 'all_member.html', {'member_form': member_form})
#     except Member.DoesNotExist:
#         return JsonResponse({'success': False, 'error_message': 'Member not found'})
#     except Exception as e:
#         return JsonResponse({'success': False, 'error_message': str(e)})


def delete(request,id):
    Member.objects.get(id=id).delete()
    print("id",id)
    return redirect(members)


# class add_member(list):
#     def post
# function save q. if h. update no h. save as

# def testing(request):
#   template = loader.get_template('template.html')
#   context = {
#     'fruits': ['Apple', 'Banana', 'Cherry'],   
#   }
#   return HttpResponse(template.render(context, request))
