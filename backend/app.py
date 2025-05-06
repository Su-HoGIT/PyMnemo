# backend/app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Active CORS pour toutes nos routes

@app.route('/api/hello')
def hello_world():
    return jsonify(message='Hello, World from Flask!')

if __name__ == '__main__':
    app.run(debug=True, port=5000)