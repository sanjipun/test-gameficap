from django.contrib.auth.models import User
from django.contrib.auth.models import BaseUserManager
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

class UserManager:
    def __init__(self):
        self.model = User

    def create(self, kwargs):
        response = dict()
        email = self.validate_email(kwargs.get('email'))
        print(email)
        if not email:
            raise ValidationError("Invalid Email address")
        validated_data = {
            "first_name": kwargs.get('first_name'),
            "last_name": kwargs.get('last_name'),
            "email":  kwargs.get('email')
        }
        user_instance = self.model.objects.create(**validated_data)
        user_instance.set_password(kwargs.get('password'))
        user_instance.username = validated_data['email']
        user_instance.save()
        # login user
        response['user'] = user_instance
        response['session_id'] = '' 
        return response

    def validate_email(self, email):
        try:
            validate_email(email)
            return True
        except Exception:
            return False


    