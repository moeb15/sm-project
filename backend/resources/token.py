from flask_jwt_extended import (
    create_access_token, 
    create_refresh_token,
    get_jwt_identity, 
    jwt_required,
    get_jwt)
from flask import request, make_response
from http import HTTPStatus
from flask_restful import Resource
from flask_cors import cross_origin

from models.users import User
from utils import verify_password

blocklist = set()


class TokenResource(Resource):
    @cross_origin(methods=['POST'],
                    supports_credentials=True, 
                    headers=['Content-Type', 'Authorization'])
    def post(self):
        json_data = request.get_json()
        email = json_data['email']
        password = json_data['password']

        user = User.get_by_email(email)

        if not user or not verify_password(password,user.password):
            return {'message':'Invalid credentials'}, HTTPStatus.FORBIDDEN

        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)

        response = make_response({'msg':'successfully logged in'})
        response.set_cookie('access_token',value=access_token,
                            domain="127.0.0.1")
        response.set_cookie('refresh_token',value=refresh_token,
                            domain="127.0.0.1")

        return response, HTTPStatus.OK
    
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def get(self):
        user_id = get_jwt_identity()
        access_token = create_access_token(identity=user_id,fresh=False)
        return {'access_token':access_token}, HTTPStatus.OK

class RevokeResource(Resource):
    @jwt_required(optional=False)
    def post(self):
        jti = get_jwt()['jti']
        blocklist.add(jti)

        return {'message':'Successfully logged out'}, HTTPStatus.OK