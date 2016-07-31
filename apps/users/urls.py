from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name="home"),
    url(r'^get_users', views.get_users, name="get_users"),
    url(r'^get_user/(?P<id>[0-9]+$)', views.get_user_by_id, name="get_user_by_id"),
]
