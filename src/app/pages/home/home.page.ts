import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';
import { CartSelector } from '../../_store/_modules/cart/cart.selector';
import { CartAction } from '../../_store/_modules/cart/cart.action';
import { StoreVinhoSelector } from '../../_store/_modules/storeVinho/storeVinho.selector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  total$: Observable<any>;
  products$: Observable<any>;

  constructor(
      private store: Store<{ cart: [] }>,
      private toastCtrl: ToastController)
  {
    this.total$ = store.select(CartSelector.totalPrice);
    this.products$ = store.select(StoreVinhoSelector.products);
  }

  showTotalProdutosLoja(products) {
    if (products) {
      if (products.length < 10) {
        return '0' + products.length;
      } else {
        return products.length;
      }
    } else {
      return 0;
    }
  }

  comprar() {
    this.store.dispatch(CartAction.removeAll({payload: null}));
    this.store.dispatch(CartAction.clearTotal({payload: null}));
    this.toast('Compra realizada com sucesso!');
  }

  async toast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      cssClass: "toast-green",
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }
}
