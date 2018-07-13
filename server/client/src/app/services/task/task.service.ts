import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../models/task/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks: Task[] = [
      new Task({
        id: '1',
        description: 'asdf'
      }),
      new Task({
        id: '2',
        description: 'task'
      }),
      new Task({
        id: '3',
        description: 'iuyg dfgdf'
      }),
      new Task({
        id: '4',
        description: 'task t'
      }),
      new Task({
        id: '5',
        description: 'task lorem'
      }),
      new Task({
        id: '6',
        description: 'task uhgsdf dg d'
      })
    ];

    return of(tasks);
  }
}
