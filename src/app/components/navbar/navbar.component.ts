import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';
import {VinhoSelector} from "../../selectors/selector.product";
import {map} from "rxjs/operators";

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
