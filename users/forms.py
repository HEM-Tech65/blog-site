from django import forms
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django.contrib.auth.forms import UserCreationForm

class RegisterForm(UserCreationForm):
    class RegisterForm(UserCreationForm):
        email = forms.EmailField(
            required=True,
            widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Enter your email'})
        )

        username = forms.CharField(
            widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Choose a username'})
        )

        password1 = forms.CharField(
            widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Create a strong password'})
        )

        password2 = forms.CharField(
            widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Confirm your password'})
        )
    """email = forms.EmailField(
        required=True,
        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Enter your email'}),
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Enter a strong password'}),
    )
    confirm_password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Confirm your password'}),
    )"""

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']  

        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Username'}),
        }

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if '@' not in email:
            raise ValidationError('Enter a valid email address.')
        if User.objects.filter(email=email).exists():
            raise ValidationError('This email is already registered.')
        return email

    def clean_username(self):
        username = self.cleaned_data.get('username')
        if not username.isalpha():
            raise ValidationError('Username should contain only letters.')
        return username

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")

        if password and confirm_password and password != confirm_password:
            raise ValidationError("Passwords do not match.")

        return cleaned_data
