import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';
import { AlertController } from '@ionic/angular';
import {VinhosAction} from "../../actions/cart.action";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<CartModel>;

  constructor(
    private store: Store<CartModel>,
    private alertCtrl: AlertController,
  ) {
    this.cart$ = store.pipe(select('cart'));
  }

  remove(item) {
    this.store.dispatch(VinhosAction.remove(item));
  }

  reset() {
    // this.store.dispatch(Clear());
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
