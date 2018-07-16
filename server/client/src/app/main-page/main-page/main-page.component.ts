import { Component, OnInit } from '@angular/core';
import { Column } from '../../models/column/Column';
import { Task } from '../../models/task/Task';
import { TaskService } from '../../services/task/task.service';
import { ColumnService } from '../../services/column/column.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  taskColumns: Column[];
  tasks: Task[];

  constructor(
    private taskService: TaskService,
    private columnService: ColumnService,
  ) { }

  ngOnInit() {
    this.taskColumns = this.columnService.getColumns('task');
    this.taskService.getAll()
      .subscribe(tasks => this.tasks = tasks);
  }

  delete(task: Task) {
    this.taskService.delete(task.id)
      .subscribe(task => {
        console.log('deleted task : ', task);
      });
  }

  update(task: Task) {
    this.taskService.update(task.id, task)
      .subscribe(task => {
        console.log('updated task : ', task);
      });
  }

  create(task: Task) {
    this.taskService.create(task)
      .subscribe(task => {
        console.log('created task : ', task);
        this.tasks.push(task);
      });
  }

}
