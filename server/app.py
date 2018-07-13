#!flask/bin/python
from flask import Flask, jsonify

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'description': 'qaqa qa'
    },
    {
        'id': 2,
        'description': 'task 2'
    }
]


@app.route('/')
def index():
    return jsonify({'statusText': 'GET /tasks - OK', 'data': 'Index Page'})


@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'statusText': 'GET /tasks - OK', 'data': tasks})

if __name__ == '__main__':
    app.run(debug=True)