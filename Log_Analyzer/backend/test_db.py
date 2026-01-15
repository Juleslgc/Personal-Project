import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app import app
from database.db import db
from models.user import User

# Crée les tables
with app.app_context():
    db.create_all()
    
    # Teste la création d'un user
    test_user = User(
        email='test@example.com',
        username='testuser',
        role='admin'
    )
    test_user.set_password('password123')
    
    db.session.add(test_user)
    db.session.commit()
    
    user = User.query.filter_by(email='test@example.com').first()
    print(f"✅ User créé : {user.username} - {user.email}")
    print(f"✅ Password check : {user.check_password('password123')}")