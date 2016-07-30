from django.shortcuts import render
from django.template import RequestContext
from django.http import JsonResponse, HttpResponse
from django.core import serializers
import json
from . import models

# Create your views here.

def get_users(request):
    print("NEW REQUEST")
    print(request.method)

    if request.method == "GET":
        all_users = models.User.objects.all()
        return render(request, "get_users.html")

    elif request.method == "POST":
        print(request.POST)
        all_users = models.User.objects.all()
        return JsonResponse(json.loads(serializers.serialize("json", all_users)), safe=False)

