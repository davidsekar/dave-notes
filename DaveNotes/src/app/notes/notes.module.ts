import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesRoutingModule } from './notes-routing.module';
import { CategoriesListComponent } from './categories/categories-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesRoutingModule
  ],
  declarations: [CategoriesListComponent]
})
export class NotesModule { }
