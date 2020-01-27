import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { CartService } from './cart.service';

@Injectable()
export class CartEffects {
    constructor(
        private actions$: Actions,
        private cartService: CartService,
    ) { }

}