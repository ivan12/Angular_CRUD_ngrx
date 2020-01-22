import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';
import { CartModel } from "../../models/cart.model";
import {VinhosAction} from "../../actions/cart.action";
import {VinhoSelector} from "../../selectors/selector.product";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: any = null;

  constructor(
    private store: Store<CartModel>,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.loadEdit()
  }

  loadEdit() {
    new VinhosAction.ActionTypes.LOAD_VINHOS_EFFECT;
  }

  async add(product) {
    this.store.dispatch(VinhosAction.loadVinhosEffect(product));
    this.store.select(VinhoSelector.products).pipe(
        map(res => {
          this.products = res;
          console.log('ProductList add() products = ', this.products);
        })
    )
    const toast = await this.toastCtrl.create({
      message: `Vinho "${product.nome}" adicionado a sua adega pessoal`,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }
}