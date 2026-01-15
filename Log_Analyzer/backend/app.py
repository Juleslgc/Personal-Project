from flask import Flask
from config import Config
from database.db import db, init_db

app = Flask(__name__)
app.config.from_object(Config)

# Initialise la DB
init_db(app)

if __name__ == '__main__':
    app.run(debug=True)