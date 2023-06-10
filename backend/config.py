from dotenv import load_dotenv
import os

load_dotenv()
class Config:
    DEBUG = True

    FLASK_APP = 'app.py'
    #FLASK_DEBUG = True

    USER = os.environ.get('PG_USER')
    PWD = os.environ.get('PG_PASSWORD')
    DBNAME = os.environ.get('PG_DBNAME')
    SRVR = os.environ.get('PG_SERVER')

    SQLALCHEMY_DATABASE_URI = f'postgresql+psycopg2://{USER}:{PWD}@{SRVR}/{DBNAME}'
    SQLALCHEMY_TRACK_MODIFICATIONS = os.environ.get('SQLALCHEMY_TRACK_MODIFICATIONS')

    SECRET_KEY = os.environ.get('SECRET_KEY')
    JWT_ERROR_MESSAGE_KEY = os.environ.get('JWT_ERROR_MESSAGE_KEY')
    JWT_BLACKLIST_ENABLED = True
    JWT_BLACKLIST_TOKEN_CHECKS = ['access','refresh']

    CORS_SUPPORTS_CREDENTIALS = True   