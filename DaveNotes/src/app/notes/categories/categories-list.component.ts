import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { Hero } from '../models/hero';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  categories: Hero[] = [];
  constructor(private activatedRoute: ActivatedRoute, private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getCategories().subscribe(categoriesResult => this.categories = categoriesResult);
  }

  getCategories(event): void {
    this.notesService.getCategories().subscribe(categoriesResult => {
      for (const category of categoriesResult) {
        this.categories.push(category);
      }
      console.log('Done');
      event.target.complete();
      //Rerender Virtual Scroll List After Adding New Data
      this.virtualScroll.checkEnd();
    });
  }

  loadData(event) {
    this.getCategories(event);
  }
}
