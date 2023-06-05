from extensions import db
from sqlalchemy import or_, desc


class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    email = db.Column(db.String(200), nullable=False, unique=True)
    password = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           server_default=db.func.now())

    def save(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    @classmethod
    def get_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    @classmethod
    def get_all_by_username(cls, username, page, per_page):

        keyword = f'%{username}%'

        return cls.query.filter(cls.username.ilike(keyword)).order_by(desc(cls.id)).paginate(page=page, per_page=per_page)

    @classmethod
    def get_by_id(cls, id):
        return cls.query.filter_by(id=id).first()
