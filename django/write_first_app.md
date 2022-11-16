# FIRST DJANGO APP

- [Official Django Documentation](https://www.djangoproject.com/)

## Intallations
- [Install Python](https://www.python.org/downloads/)
- install `pipenv` by running:
    ```
    pip3 install pipenv
    ```
  
## Set up

- Open a terminal window
- Navigate to your `projects` directory
- Create a folder with name `pollster-django`
- Navigate to `pollster-django` directory
```
cd projects
mkdir pollster-django
cd pollster-django
```
- Set up a virtual enviroment
    ```
    pipenv shell
    ```
- Install `Django`
    ```
    pipenv install django
    ```
- Start Project
    ```
    django-admin startproject pollster
    ```
- Navigate to your `pollster` directory
- Run server
    ```
    python3 manage.py runserver
    ```
  > You might be asked to run migrations, if so, stop the server and run
  > ```
  > python3 manage.py migrate
  > ```

## Creating app
```
python3 manage.py startapp polls
```
- Open `pollster/polls/models.py` create the basic models:
    ```
    from django.db import models

    class Question(models.Model):
        title = models.CharField(max_length=200)
        question_text = models.CharField(max_length=200)
        pub_date = models.DateTimeField('date published')

        def __str__(self):
            return self.question_text


    class Choice(models.Model):
        question = models.ForeignKey(Question, on_delete=models.CASCADE)
        choice_text = models.CharField(max_length=200)
        votes = models.IntegerField(default=0)

        def __str__(self):
            return self.choice_text

    ```

- Open `pollster/pollster/settings.py` and add `'polls.apps.PollsConfig'` inside `INSTALLED_APPS`:
    ```
    INSTALLED_APPS = [
        'polls.apps.PollsConfig',
        ...
    ]
    ```
- inside `pollster` directory, run Make migrations command:
    ```
    python3 manage.py makemigrations polls
    ```
- then run migrations:
    ```
    python3 manage.py migrate
    ```
  
> ### Manipulation data inside shell
> ```
> python3 manage.py shell
> ```
> ```
> >>> from polls.models import Question,Choice
> >>> from django.utils import timezone
> >>> q = Question(title="Question 1", question_text="What is you favourite Python framework?", pub_date=timezone.now())
> >>> q.save()
> >>> q = Question.objects.get(pk=1)
> >>> q.choice_set.create(choice_text="Django", votes=0)
> >>> q.choice_set.create(choice_text="Flask", votes=0)
> >>> q.choice_set.create(choice_text="Web2py", votes=0)
> >>> q.choice_set.all()
> >>> quit()
> ```