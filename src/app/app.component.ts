import {Component, Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { VinhosAction } from "./_store/_modules/vinho/vinho.action";
import { VinhoSelector } from "./_store/_modules/vinho/vinho.selector";
import {CartState, VinhoState} from "./_store/vinho-store.module";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
@Injectable()
export class AppComponent implements OnInit {
  listVinhos$: Observable<VinhoState[]>;
  cart: CartState;
  store: Store<CartState>;

  constructor(private storeCart: Store<CartState>) {
    this.store = storeCart;
  }

  ngOnInit(): void {
    this.store.dispatch(VinhosAction.loadVinhosEffect({payload: this.cart}));
    this.listVinhos$ = this.store.select(VinhoSelector.myProducts);
  }
}
