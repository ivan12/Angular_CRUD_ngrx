import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { VinhoSelector } from "../../_store/_modules/vinho/vinho.selector";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  total$: Observable<any>;

  constructor(private store: Store<{ cart: [] }>) {
    this.total$ = store.select(VinhoSelector.total);
  }

}
