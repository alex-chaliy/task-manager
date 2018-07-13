from django.http import HttpResponse

import json

TaskController = {
    'get_tasks': lambda request:
        HttpResponse(json.dumps({'statusText': 'GET /tasks OK', 'data': [ {'id': '1', 'description': 'qa qa' } ] } ), content_type='application/json')
}
