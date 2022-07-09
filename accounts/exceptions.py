
from rest_framework.exceptions import APIException




class WrongCreds(APIException):
    status_code = 401
    default_detail = 'Incorrect username or password.'
    default_code = 'Wrong credentials'

class DuplicateException(APIException):
    status_code = 303
    default_detail = 'A User with this email already exists, please login using your credentials.'
    default_code = 'User already exists'

class NotOnboarded(APIException):
    status_code = 303
    default_detail = 'User exists, please go through the onboarding to be able to login.'
    default_code = 'User not onboarded'

class IncativeAccount(APIException):
    status_code = 300
    default_detail = 'Your account is not activated.'
    default_code = 'Inactive account'

class AlreadyOnboarded(APIException):
    status_code = 303
    default_detail = 'You aready went through the onboarding.'
    default_code = 'User already onboarded'
