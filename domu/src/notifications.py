from flask_mail import Mail, Message

mail = Mail()

def send_match_email(user_email, matches):
    msg = Message("New Property Matches!",
                  sender="noreply@domu.it",
                  recipients=[user_email])
    msg.body = f"Hi! We found {len(matches)} new listings for you."
    mail.send(msg)