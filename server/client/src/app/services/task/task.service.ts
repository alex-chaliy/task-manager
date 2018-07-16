import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';

import { Task } from '../../models/task/Task';
import { IBaseHttpResponse } from '../../core/base-http-response/IBaseHttpResponse';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Task[]> {
    return this.http.get(environment.host + '/api/tasks')
      .map((response: IBaseHttpResponse) => {
        console.log('getAll : \n ', response.data, '\n')
        return response.data;
      })
  }

  get(id: string): Observable<Task> {
    return this.http.get(environment.host + '/api/tasks/' + id)
      .map((response: IBaseHttpResponse) => {
        return new Task(response.data[0]);
      })
  }

  create(task: Task): Observable<Task> {
    return this.http.post(environment.host + '/api/tasks', task)
      .map((response: IBaseHttpResponse) => {
        return new Task(response.data[0]);
      })
  }

  update(id: string, task: Task): Observable<Task> {
    return this.http.put(environment.host + '/api/tasks/' + id, task)
      .map((response: IBaseHttpResponse) => {
        return new Task(response.data[0]);
      })
  }

  delete(id: string): Observable<Task> {
    return this.http.delete(environment.host + '/api/tasks/' + id)
      .map((response: IBaseHttpResponse) => {
        return new Task(response.data[0]);
      })
  }
}
