from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.GetUsers.as_view()),
    url(r'^get_user/(?P<id>[0-9]+$)', views.GetUserById.as_view()),
]
