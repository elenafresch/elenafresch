from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, LoginManager

login_manager = LoginManager()

class User(UserMixin):
    # ... (tie this to your database User model)