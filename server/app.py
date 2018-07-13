#!flask/bin/python
import os

from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)
# app = Flask(__name__, static_url_path='')

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
def root():
    root_dir = os.path.dirname(os.getcwd())
    path = os.path.join(root_dir, 'server', 'client', 'dist', 'client')
    print(path)
    return send_from_directory(path, 'index.html')


@app.route('/<path:filename>')
def serve_static(filename):
    root_dir = os.path.dirname(os.getcwd())
    path = os.path.join(root_dir, 'server', 'client', 'dist', 'client')
    print(path)
    return send_from_directory(path, filename)


@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'statusText': 'GET /tasks - OK', 'data': tasks})

if __name__ == '__main__':
    app.run(debug=True)