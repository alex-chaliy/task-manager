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
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

}
