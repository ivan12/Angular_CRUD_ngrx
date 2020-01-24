import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { VinhoSelector } from "../../_store/_modules/vinho/vinho.selector";
import {VinhosAction} from "../../_store/_modules/vinho/vinho.action";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  total$: Observable<any>;

  constructor(
      private store: Store<{ cart: [] }>,
      private toastCtrl: ToastController)
  {
    this.total$ = store.select(VinhoSelector.total);
  }

  comprar() {
    this.store.dispatch(VinhosAction.removeAll({payload: null}));
    this.store.dispatch(VinhosAction.clearTotal({payload: null}));
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
