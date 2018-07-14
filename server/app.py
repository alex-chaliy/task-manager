#!flask/bin/python
import os
import string

from flask import Flask, jsonify, send_from_directory

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'description': 'qa_qa qa'
    },
    {
        'id': 2,
        'description': 'task 2'
    }
]


root_dir = os.path.dirname(os.getcwd())
dist_path = os.path.join(root_dir, 'server', 'client', 'dist', 'client')


@app.errorhandler(404)
def root(a):
    return send_from_directory(dist_path, 'index.html')


@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(dist_path, filename)


@app.route('/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    return jsonify({'statusText': 'DELETE /tasks/%d - OK' % task_id})


@app.route('/api/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    return jsonify({'statusText': 'PUT /tasks/%d - OK' % task_id})


@app.route('/api/tasks', methods=['POST'])
def add_task():
    return jsonify({'statusText': 'POST /tasks - OK'})


@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'statusText': 'GET /tasks - OK', 'data': tasks})


@app.route('/api/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    return jsonify({'statusText': 'GET /tasks/%d - OK' % task_id})


if __name__ == '__main__':
    app.run(debug=True)

