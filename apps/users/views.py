from django.shortcuts import render
from django.template import RequestContext
from django.http import JsonResponse, HttpResponse
from django.core import serializers
import json
from . import models

# Create your views here.

def home(request):
    if request.method == "GET":
        all_users = models.User.objects.all()
        return render(request, "get_users.html")

def get_users(request):
    print("NEW REQUEST")
    print(request.method)

    if request.method == "POST":
        print(request.POST)
        all_users = models.User.objects.all()
        return JsonResponse(json.loads(serializers.serialize("json", all_users)), safe=False)

    else:
        return JsonResponse({"msg": "error"})


def get_user_by_id(request, id):
    if request.method == "GET":
        print("GET USER BY ID")
        print(id)
        user_by_id = models.User.objects.filter(pk=id)
        print(user_by_id)
        return JsonResponse(json.loads(serializers.serialize("json", user_by_id)), safe=False)

    return JsonResponse({"msg": "error"})


