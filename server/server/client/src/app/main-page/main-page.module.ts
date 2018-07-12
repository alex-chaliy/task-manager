import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { TableModule } from '../ui-elements/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [MainPageComponent]
})
export class MainPageModule { }
