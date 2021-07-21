import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EMPTY, fromEvent, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators'
import { Cuisine } from './models/cuisine';
import { CuisineService } from './services/cuisine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private recipes: Array<Cuisine> = [];

  cuisines$: Observable<Array<Cuisine>> = EMPTY;
  title = 'Saved Recipes';
  filter = 'Filter';
  searchTerm$ = new Subject<any>();

  constructor(
    private cuisineService: CuisineService
  ) { }

  ngOnInit(): void {
    this.cuisineService.get().subscribe(data =>{
       this.cuisines$ = of(data); 
       this.recipes = data;
    });
    this.searchTerm$.pipe(
      debounceTime(250),
      distinctUntilChanged()
    ).subscribe((term: any) => {
      this.cuisines$ = of(this.recipes.filter(r => r.name.toLowerCase().indexOf(term.value.toLowerCase()) !== -1));
    });
  }
}
