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

  @Output('onDelete') _onDelete: EventEmitter<any> = new EventEmitter();
  @Output('onUpdate') _onUpdate: EventEmitter<any> = new EventEmitter();
  @Output('onCreate') _onCreate: EventEmitter<any> = new EventEmitter();

  mode: TableComponentMode = '';

  itemToWrite: any = {};

  constructor() { }

  ngOnInit() {
  }

  emitDelete(item: any, itemIndex: number) {
    const r = confirm("Are you sure?");
    if (r == true) {
      console.log('emitDelete');
      this._dataItems.splice(itemIndex, 1);
      this._onDelete.emit(item);
    }
  }

  startEdit(item) {
    console.log('startEdit');
    this.mode = 'edit';
    this.itemToWrite = item;
  }
  emitUpdate(item: any) {
    console.log('emitUpdate');
    this.mode = '';
    this._onUpdate.emit(item);
    this.itemToWrite = {};
  }

  startCreate() {
    console.log('startCreate');
    this.mode = 'create';
    this.itemToWrite = {};
  }
  emitCreate(item: any) {
    console.log('emitCreate');
    this.mode = '';
    this._onCreate.emit(item);
    this.itemToWrite = {};
  }

}
