from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^app_test_endpoint/get_users', views.get_users, name="get_users"),
]
