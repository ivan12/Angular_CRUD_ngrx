import {Component, Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AlertController } from '@ionic/angular';
import { VinhosAction } from "../../_store/_modules/vinho/vinho.action";
import { VinhoSelector } from "../../_store/_modules/vinho/vinho.selector";
import { CartState } from "../../_store/vinho-store.module";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
@Injectable()
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<CartState>;

  constructor(
    private store: Store<CartState>,
    private alertCtrl: AlertController,
  ) {
    this.cart$ = store.select(VinhoSelector.cart);
  }

  remove(myProduct) {
    this.store.dispatch(VinhosAction.remove({payload: myProduct}));
    this.store.dispatch(VinhosAction.reduceTotal({payload: myProduct.preco}));
  }

  reset() {
    this.store.dispatch(VinhosAction.removeAll({payload: null}));
    this.store.dispatch(VinhosAction.clearTotal({payload: null}));
  }

  ngOnInit() {
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
