import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesListComponent } from './categories/categories-list.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
