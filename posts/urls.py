from django.urls import path
from . import views

from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

app_name = 'posts'

urlpatterns = [
    path('', views.post_list, name="list"),  
    path('search/', views.search, name="search"),
    path('', views.post_list, name='post_list'),
    path('new-post/', views.post_new, name="new-post"),
    path('<slug:slug>', views.post_page, name="page" ), 
    path('post/<int:post_id>/', views.post_detail, name='post_detail'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
