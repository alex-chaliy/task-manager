from app_init import get_db_cursor

db_cursor = get_db_cursor()


class Task:
    def create(self, newTask):

        q = """
        INSERT
        INTO
        tasks(description)
        VALUES('%s')
        """ % newTask['description']

        db_cursor.execute(q)

        db_cursor.execute('SELECT * FROM tasks WHERE id=%d' % db_cursor.lastrowid)

        # @ref: flask get json data from mysql result
        # https://stackoverflow.com/a/43796849/7455192
        row_headers=[x[0] for x in db_cursor.description] #this will extract row headers
        rv = db_cursor.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

        return json_data

    def update(self, task_id, task_data):

        q = """UPDATE
        tasks
        SET
        description = '%s'
        WHERE
        id=%d""" % (task_data['description'], task_id)

        db_cursor.execute(q)

        rv = self.get(task_id)
        return rv

    def delete(self, task_id):

        rv = self.get(task_id)
        db_cursor.execute('DELETE from tasks WHERE id=%d' % task_id)
        return rv

    def get(self, task_id):

        db_cursor.execute('SELECT * from tasks WHERE id=%d' % task_id)

        # @ref: flask get json data from mysql result
        # https://stackoverflow.com/a/43796849/7455192
        row_headers=[x[0] for x in db_cursor.description] #this will extract row headers
        rv = db_cursor.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

        return json_data

    def get_all(self):

        db_cursor.execute('SELECT * from tasks')

        # @ref: flask get json data from mysql result
        # https://stackoverflow.com/a/43796849/7455192
        row_headers=[x[0] for x in db_cursor.description] #this will extract row headers
        rv = db_cursor.fetchall()
        json_data=[]
        for result in rv:
            json_data.append(dict(zip(row_headers, result)))

        return json_data
