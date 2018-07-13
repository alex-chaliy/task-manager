import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../models/column/Column';
import { TableComponentMode } from '../../../models/table-component-mode/TableComponentMode';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('dataItems') _dataItems: any[];
  @Input('columns') _columns: Column[];

  @Output('onDeleteAll') _onDeleteAll: EventEmitter<any>;
  @Output('onDelete') _onDelete: EventEmitter<any>;
  @Output('onUpdate') _onUpdate: EventEmitter<any>;
  @Output('onCreate') _onCreate: EventEmitter<any>;

  mode: TableComponentMode;

  constructor() { }

  ngOnInit() {
  }

  deleteAll() {
    this._onDelete.emit('All Deleted');
  }

  deleteItem(item: any, itemIndex: number) {
    this._onDelete.emit(item);
  }

  startEdit() {
    this.mode = 'edit';
  }
  updateItem(item: any) {
    this._onUpdate.emit(item);
  }

  startCreate() {
    this.mode = 'create';
  }
  createItem(item: any) {
    this._onCreate.emit(item);
  }

}
