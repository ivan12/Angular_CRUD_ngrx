import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartModel } from "./models/cart.model";
import { VinhosAction } from "./_store/_modules/vinho/vinho.action";
import { VinhoSelector } from "./_store/_modules/vinho/vinho.selector";
import { VinhoState } from "./_store/vinho-store.module";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  listVinhos$: Observable<VinhoState[]>;
  products: [];

  constructor(private store: Store<CartModel>) {
    this.store.dispatch(VinhosAction.loadVinhosEffect({payload: this.products}));
    this.listVinhos$ = store.select(VinhoSelector.products);
  }
}
