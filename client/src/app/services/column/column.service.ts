import { Injectable } from '@angular/core';
import { Column } from '../../models/column/Column';

export type ColumnSet = '' | 'task';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {

  constructor() { }

  getColumns(colSet: ColumnSet): Column[]{
    let res: Column[];
    switch (colSet) {
      case 'task':
        res = [
          new Column({
            mapTo: 'id',
            name: 'ID',
            width: 20
          }),
          new Column({
            mapTo: 'description',
            name: 'Task',
            width: 60
          }),
          new Column({
            mapTo: '',
            name: 'Clear All',
            width: 20
          })
        ];
        break;
    
      default:
        res = [];
        break;
    }

    return res;
  }
}
