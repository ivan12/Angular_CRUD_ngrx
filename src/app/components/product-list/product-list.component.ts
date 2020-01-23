import {Component, Injectable, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';
import { VinhosAction } from "../../_store/_modules/vinho/vinho.action";
import { VinhoSelector } from "../../_store/_modules/vinho/vinho.selector";
import {CartState, VinhoState} from "../../_store/vinho-store.module";
import { Observable } from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
@Injectable()
export class ProductListComponent implements OnInit {
  public products$: Observable<VinhoState[]> = null;

  constructor(
    private store: Store<CartState>,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.loadVinhos()
  }

  loadVinhos() {
    this.products$ = this.store.select(VinhoSelector.products);
  }

  async add(product) {
    this.store.dispatch(VinhosAction.addVinhoMyProducts({payload: product}));
    this.store.dispatch(VinhosAction.addTotal({payload: product.preco}));
  }

  loadEdit(product) {
    this.store.dispatch(VinhosAction.edit({payload: product}));
  }

  setIndisponivel(product) {
    let objTemp = {...product};
    objTemp.visivel = 'false';
    this.store.dispatch(VinhosAction.editVinhosEffect({payload: objTemp}));
  }

  async toast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }
}