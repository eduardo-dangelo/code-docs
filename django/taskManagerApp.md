## TASK MANAGER PRO

### DJANGO REACT APP

- python
- django
- djangorestframework
- react
- typescript
- redux

## Intallations
> if you don't have python installed, please follow the steps

- [Install Python](https://www.python.org/downloads/)
- install `pipenv` by running:
    ```
    pip3 install pipenv
## Backend Set Up
- Open a terminal window
- Navigate to your `projects` directory
    > Create one if it doens't exist by running: `mkdir projects`
- Create a folder with name `task-manager-pro` and navigate to it:
    ```
    mkdir task-manager-pro
    cd task-manager-pro
    ```
- Create a virtual environment:
    ```
    pipenv shell
    ```
- Install packages:
    ```
    pipenv install django djangorestframework django-cors-headers django-rest-knox
    ```
- Start `backend` project:
    ```
    django-admin startproject backend
    ```
- Navigate to `backend` folder(`cd backend`) and create `taskManager` app:
  ```
  python3 manage.py startapp task_manager
  ```
  
- Open `backend/backend/settings.py` and add the following to `INSTALLED_APPS` list:
  ```
  'task_manager',
  'rest_framework',
  'corsheaders',
  ```  
- Add the following to `MIDDLEWARE` list:
  ```
  'corsheaders.middleware.CorsMiddleware',
  'django.middleware.common.CommonMiddleware',
  ```
    
- Add the following anywhere in the page:
  ```
  CORS_ORIGIN_ALLOW_ALL = True

  ALLOWED_HOSTS = ['*']
  
  CORS_ORIGIN_WHITELIST = (
      'http://localhost:3000',
  )
  ```
- Run migrations and run server:
    ```
    python3 manage.py migrate
    python3 manage.py runserver
    ```
  > if  you open your browser on `http://localhost:8000` you should see django default page 
  

## GIT Repository Set Up

- Create a repository in [github](https://github.com/repositories) called `task-manager-pro` without a `README.md` file.
- Open a terminal window on `task-manager-pro` directory and run:
  ```
  git init
  git remote add origin https://github.com/YOUR_USERNAME/task-manager-pro.git
  git branch -M master
  ```
- Create a `.gitignore` file and add the following:
  ```
  # if you use webstorm
  .idea
  
  # backend
  /backend/db.sqlite3
  ```
- Commit and push:
  ```
  git add .
  git commit -m "initial commit"
  git push -u origin master
  ```

## Backend Models

- Open `backend/task_manager/models.py` and add the following:
  ```
  from django.db import models
  from django.utils import timezone
  
  # Create your models here.
  STATUS = [
    ('IN', 'initiated'),
    ('IP', 'in progress'),
    ('PK', 'inactive'),
    ('BK', 'blocked'),
    ('CP', 'completed'),
    ('CC', 'canceled'),
  ]

  
  class Project(models.Model):
      title = models.CharField(max_length=120)
      description = models.TextField(null=True, blank=True)
      created_at = models.DateTimeField('created at', default=timezone.now)
      status = models.ForeignKey(Status, on_delete=models.PROTECT, default=None)
  
      def __str__(self):
          return self.title
  
  
  class Okr(models.Model):
      title = models.CharField(max_length=120)
      description = models.TextField(null=True, blank=True)
      created_at = models.DateTimeField('created at', default=timezone.now)
      project = models.ForeignKey(Project, on_delete=models.CASCADE)
      status = models.ForeignKey(Status, on_delete=models.PROTECT, default=None)
  
      def __str__(self):
          return self.title
  
  
  class Sprint(models.Model):
      title = models.CharField(max_length=300)
      created_at = models.DateTimeField('created at', default=timezone.now)
      project = models.ForeignKey(Project, on_delete=models.CASCADE)
      result = models.TextField(null=True, blank=True)
      status = models.ForeignKey(Status, on_delete=models.PROTECT, default=None)
  
      def __str__(self):
          return self.title
  
  
  class Task(models.Model):
      title = models.CharField(max_length=120)
      created_at = models.DateTimeField('created at', default=timezone.now)
      description = models.TextField(null=True, blank=True)
      okr = models.ForeignKey(Okr, on_delete=models.CASCADE)
      sprint = models.ForeignKey(Sprint, on_delete=models.PROTECT, null=True, blank=True)
      status = models.ForeignKey(Status, on_delete=models.PROTECT, default=None)
      project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, blank=True)
  
      def __str__(self):
          return self.title
  
  
  class Checklist(models.Model):
      title = models.CharField(max_length=300)
      created_at = models.DateTimeField('created at', default=timezone.now)
      completed = models.BooleanField(default=False)
      task = models.ForeignKey(Task, on_delete=models.CASCADE)
  
      def __str__(self):
          return self.title
  
  
  class Note(models.Model):
      content = models.TextField()
      created_at = models.DateTimeField('created at', default=timezone.now)
      project = models.ForeignKey(Project, on_delete=models.CASCADE)
  
      def __str__(self):
          return self.content
  ```
  
- Now open `backend/task_manager/admin.py` and register models:
  ```
  from django.contrib import admin
  from .models import Project, Okr, Note, Task, Checklist, Sprint
  
  class NoteInline(admin.TabularInline):
      model = Note
      extra = 0
  
  
  class SprintInline(admin.TabularInline):
      model = Sprint
      extra = 0
  
  
  class TaskInline(admin.TabularInline):
      model = Task
      fieldsets = [
          (None, {'fields': ['id', 'title', 'status', 'okr', 'sprint']}),
      ]
      extra = 0
  
  
  class OkrInline(admin.TabularInline):
      model = Okr
      fieldsets = [
          (None, {'fields': ['id', 'title', 'description', 'status']}),
      ]
      extra = 0
  
  
  class ChecklistInline(admin.TabularInline):
      model = Checklist
      extra = 0
  
  
  class ProjectAdmin(admin.ModelAdmin):
      fieldsets = [
          (None, {'fields': ['title', 'created_at', 'status']}),
      ]
      inlines = [OkrInline, SprintInline, NoteInline, TaskInline]
  
  
  class OkrAdmin(admin.ModelAdmin):
      fieldsets = [
          (None, {'fields': ['title', 'description', 'created_at', 'status', 'project']}),
      ]
      inlines = [TaskInline]
  
  
  class TaskAdmin(admin.ModelAdmin):
      fieldsets = [
          (None, {'fields': ['title', 'description', 'created_at', 'status', 'okr', 'sprint']}),
      ]
      inlines = [ChecklistInline]
  
  
  class SprintAdmin(admin.ModelAdmin):
      fieldsets = [
          (None, {'fields': ['title', 'created_at', 'project', 'result', 'status']}),
      ]
      inlines = [TaskInline]
  
  
  admin.site.register(Okr, OkrAdmin)
  admin.site.register(Project, ProjectAdmin)
  admin.site.register(Task, TaskAdmin)
  admin.site.register(Sprint, SprintAdmin)
  ```

### Make Migrations  

- Inside `backend` directory, open a terminal window:
  ```
  python3 manage.py makemigrations
  python3 manage.py migrate
  ```
  >note: everytime you change models.py file you'll need to run migration commands
  >

### Create Superuser
- Open a terminal inside `backend` and run:
  ```
  python3 manage.py createsuperuser
  ```
- run server:
  ```
  python3 manage.py runserver
  ```
  > go to `http://localhost:8000/admin` and log in as superuser:
  > test your application
  > > start by creating a `status`, as in every other model `status` is a required field.

### Commit Changes
- commit and push your changes at this point:
  ```
  git add .
  git commit -m "create backend models and register on admin site"
  git push
  ```
  
## Djago Rest Frameworks