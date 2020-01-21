import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Add, getProducts, LoadEdit } from 'src/app/actions/cart.action';
import { ToastController } from '@ionic/angular';
import { CartModel } from "../../models/cart.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: any[] = null;

  constructor(
    private store: Store<CartModel>,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.store.dispatch(new getProducts(this.products))
  }

  async loadEdit(product) {
    this.store.dispatch(LoadEdit(product));
  }

  async add(product) {
    this.store.dispatch(Add(product));
    const toast = await this.toastCtrl.create({
      message: `Vinho "${product.nome}" adicionado a sua adega pessoal`,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }
}