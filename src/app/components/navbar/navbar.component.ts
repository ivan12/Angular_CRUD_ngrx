import {Component, Injectable, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from "rxjs/operators";
import { VinhoSelector } from "../../_store/_modules/vinho/vinho.selector";
import {CartState, VinhoState} from "../../_store/vinho-store.module";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
@Injectable()
export class NavbarComponent implements OnInit {
  myProducts$: Observable<VinhoState[]> = undefined;

  constructor(private store: Store<CartState>) {
    this.myProducts$ = store.select(VinhoSelector.myProducts);
  }

  ngOnInit() {
  }

}
