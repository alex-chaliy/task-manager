
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from '../main-page/main-page/main-page.component';

const routes: Routes = [
		{ path: '', redirectTo: '/main', pathMatch: 'full' },
		{ path: 'main', component: MainPageComponent },
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
