from flask import Flask, request, jsonify
from flask_cors import CORS
from password_generator import generator_password
import os

app = Flask(__name__)
CORS(app)

def str_to_bool(value):
    return str(value).lower() in ['true', 'yes', '1', 'oui']

@app.route('/generate-password', methods=['GET'])
def password():
    try:
        lenght = int(request.args.get('length', 12))
        lenght = max(8, min(lenght,64))
    except ValueError:
        return jsonify({'error': 'Invalid lenght'}), 400
    
    uppercase = str_to_bool(request.args.get('uppercase', 'true'))
    digit = str_to_bool(request.args.get('digit', 'true'))
    symbol = str_to_bool(request.args.get('symbol', 'true'))

    if not (uppercase or digit or symbol):
        return jsonify({'error': 'At least one character type must be selected'}), 400
    
    password = generator_password(lenght, digit, uppercase, symbol)
    return jsonify({'password': password}), 200

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)