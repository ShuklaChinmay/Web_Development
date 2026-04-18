# i have created this file - view.py

from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world! This is my first Django app.")

def about(request):
    return HttpResponse("This is the about page.")

def H1Tag(request):
    return HttpResponse("<H1>This is an H1 tag.</H1>")