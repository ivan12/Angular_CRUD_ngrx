import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';
import { CartState, VinhoState } from '../../_store/vinho-store.module';
import { CartSelector } from '../../_store/_modules/cart/cart.selector';
import { CartAction } from '../../_store/_modules/cart/cart.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
@Injectable()
export class ProductListComponent implements OnInit {
  public products$: Observable<VinhoState[]> = null;
  public myProducts$: Observable<VinhoState[]> = null;
  public list = undefined;

  constructor(
    private store: Store<CartState>,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.loadVinhos()
  }

  loadVinhos() {
    this.products$ = this.store.select(CartSelector.products);
    this.myProducts$ = this.store.select(CartSelector.myProducts);
  }

  add(product, list) {
    if (list && (list.length > 0 && list.filter(elem => elem.id == product.id).length > 0)) {
      this.store.dispatch(CartAction.addQuantidadeCarrinhoProduct({ payload: list, product: product }));
    } else {
      this.store.dispatch(CartAction.addVinhoMyProducts({payload: product}));
    }
    this.store.dispatch(CartAction.addTotal({payload: product.preco}));
  }

  loadEdit(product) {
    this.store.dispatch(CartAction.edit({payload: product}));
  }

  setIndisponivel(product) {
    this.store.dispatch(CartAction.desativarVinhoEffect({payload: product}));
    this.toast('Vinho excluído com sucesso!');
  }

  async toast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      cssClass: "toast-red",
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }
}