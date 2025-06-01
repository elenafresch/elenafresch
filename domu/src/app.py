from flask import Flask
from src.config import Config
from flask_login import LoginManager
from src.models import User  # Import your User model

app = Flask(__name__)
app.config.from_object(Config)

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    # Load a user from your database using the user_id
    # Example: return User.query.get(int(user_id))
    # (You'll need to implement this query later)
    pass

@app.route('/')
def hello():
    return "Ciao! Domu is up and running :)"

if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'])