import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';
import { map } from "rxjs/operators";
import { VinhoSelector } from "../../_store/_modules/vinho/vinho.selector";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  products: any;

  constructor(private store: Store<CartModel>) {
    store.select(VinhoSelector.products).pipe(map(res => {
      this.products = res;
    }));
  }

  ngOnInit() {
  }

}
