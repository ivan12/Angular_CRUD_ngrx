import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartState, VinhoState } from './_store/vinho-store.module';
import { CartAction } from './_store/_modules/cart/cart.action';
import { CartSelector } from './_store/_modules/cart/cart.selector';

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
    this.store.dispatch(CartAction.loadVinhosEffect({payload: this.cart}));
    this.listVinhos$ = this.store.select(CartSelector.myProducts);
  }

  countMyProducts(products) {
    let countMyProducts = 0;
    products.forEach(product => {
      countMyProducts += product.quantidadeCarrinho;
    });
    return countMyProducts;
  }
}
