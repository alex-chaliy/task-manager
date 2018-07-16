#!flask/bin/python
import os

from flask import jsonify, send_from_directory

from app_init import app, get_db_cursor

from models.Task import Task
taskModel = Task()


from flask import request

db_cursor = get_db_cursor()


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
    rv = taskModel.delete(task_id)
    return jsonify({'statusText': 'DELETE /tasks/%d - OK' % task_id, 'data': rv})


@app.route('/api/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task_data = request.get_json()
    rv = taskModel.update(task_id, task_data)
    return jsonify({'statusText': 'PUT /tasks/%d - OK' % task_id, 'data': rv})


@app.route('/api/tasks', methods=['POST'])
def add_task():
    data = request.get_json()

    print('\n add_task : request body* \n', data)

    rv = taskModel.create(data)

    return jsonify({'statusText': 'POST /tasks - OK', 'data': rv})


@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    rv = taskModel.get_all()
    return jsonify({'statusText': 'GET /tasks - OK', 'data': rv})


@app.route('/api/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    rv = taskModel.get(task_id)
    return jsonify({'statusText': 'GET /tasks/%d - OK' % task_id, 'data': rv})


if __name__ == '__main__':
    app.run(debug=True)

