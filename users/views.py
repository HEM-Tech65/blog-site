from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from django.contrib import messages
from .forms import RegisterForm


# Create your views here.
def register_view(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user=form.save()
            messages.success(request, "Account created successfully!")
            return redirect("users:login")
        else:
            messages.error(request, "There was an error with your registration. Please check your inputs.")
    else:
        form = RegisterForm()
    return render(request, "users/register.html", { "form": form })

def login_view(request):
    if request.method == "POST":
       form = AuthenticationForm(data=request.POST)
       if form.is_valid():
           login(request, form.get_user())
           if 'next' in request.POST:
               return redirect(request.POST.get('next'))
           else:
            return redirect("posts:list")
    else:
        form = AuthenticationForm()
    return render(request, "users/login.html", { "form": form })

def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect("/")