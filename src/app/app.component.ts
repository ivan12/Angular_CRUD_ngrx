import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreVinhoState, VinhoState } from './_store/vinho-store.module';
import { StoreVinhoAction } from './_store/_modules/storeVinho/storeVinho.action';
import { StoreVinhoSelector } from './_store/_modules/storeVinho/storeVinho.selector';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
@Injectable()
export class AppComponent implements OnInit {
  listVinhos$: Observable<VinhoState[]>;
  storeVinho: Store<StoreVinhoState>;

  constructor(private store: Store<StoreVinhoState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(StoreVinhoAction.loadVinhosEffect({payload: this.storeVinho}));
    this.listVinhos$ = this.store.select(StoreVinhoSelector.products);
  }

  countMyProducts(products) {
    let countMyProducts = 0;
    products.forEach(product => {
      countMyProducts += product.quantidadeCarrinho;
    });
    return countMyProducts;
  }
}