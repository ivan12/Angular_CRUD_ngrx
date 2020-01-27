import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AlertController } from '@ionic/angular';
import { CartState, VinhoState } from '../../_store/vinho-store.module';
import { CartSelector } from '../../_store/_modules/cart/cart.selector';
import { CartAction } from '../../_store/_modules/cart/cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
@Injectable()
export class ShoppingCartComponent {
  myProducts$: Observable<VinhoState[]>;

  constructor(
    private store: Store<CartState>,
    private alertCtrl: AlertController,
  ) {
    this.myProducts$ = store.select(CartSelector.myProducts);
  }

  remove(myProduct) {
    this.store.dispatch(CartAction.remove({payload: myProduct}));
    this.store.dispatch(CartAction.reduceTotal({payload: myProduct.preco * myProduct.quantidadeCarrinho}));
  }

  addQuantidadeCarrinho(list, product) {
     this.store.dispatch(CartAction.addQuantidadeCarrinhoProduct({ payload: list, product: product }));
    this.store.dispatch(CartAction.addTotal({payload: product.preco}));
  }

  reduceQuantidadeCarrinho(list, product) {
    if (product.quantidadeCarrinho > 1) {
      this.store.dispatch(CartAction.reduceQuantidadeCarrinhoProduct({ payload: list, product: product }));
      this.store.dispatch(CartAction.reduceTotal({payload: product.preco}));
    }
  }

  reset() {
    this.store.dispatch(CartAction.removeAll({payload: null}));
    this.store.dispatch(CartAction.clearTotal({payload: null}));
  }

  async presentRemoveConfirm(item) {
    const alert = await this.alertCtrl.create({
      header: 'Remover vinho',
      message: `Deseja remover o vinho ${item.nome}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Remover',
          handler: () => {
            this.remove(item);
          }
        }
      ]
    });
    await alert.present();
  }
}