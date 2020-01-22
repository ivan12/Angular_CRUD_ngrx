import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';
import { CartModel } from "../../models/cart.model";
import { VinhosAction } from "../../_store/_modules/vinho/vinho.action";
import { VinhoSelector } from "../../_store/_modules/vinho/vinho.selector";
import { VinhoState } from "../../_store/vinho-store.module";
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products$: Observable<VinhoState[]> = null;

  constructor(
    private store: Store<CartModel>,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.loadVinhos()
  }

  loadVinhos() {
    this.products$ = this.store.select(VinhoSelector.products);
  }

  async add(product) {
    this.store.dispatch(VinhosAction.addVinhosEffect({payload: product}));
    const toast = await this.toastCtrl.create({
      message: `Vinho "${product.nome}" adicionado a sua adega pessoal`,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }
}