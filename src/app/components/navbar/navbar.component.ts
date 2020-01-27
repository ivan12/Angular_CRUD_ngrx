import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartState, VinhoState } from '../../_store/vinho-store.module';
import { CartSelector } from '../../_store/_modules/cart/cart.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
@Injectable()
export class NavbarComponent {
  myProducts$: Observable<VinhoState[]> = undefined;

  constructor(private store: Store<CartState>) {
    this.myProducts$ = store.select(CartSelector.items);
  }

  countMyProducts(products) {
    let countMyProducts = 0;
    products.forEach(product => {
      countMyProducts += product.quantidadeCarrinho;
    });
    return countMyProducts;
  }

}
