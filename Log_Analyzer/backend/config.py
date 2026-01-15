class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///logs.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'ton-secret-key-a-changer'  # Pour les sessions