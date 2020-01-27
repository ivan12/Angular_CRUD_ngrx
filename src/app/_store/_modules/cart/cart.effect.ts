import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {catchError, exhaustMap, map} from "rxjs/operators";
import {CartService} from "./cart.service";
import {CartAction} from "./cart.action";

@Injectable()
export class CartEffects {
    constructor(
        private actions$: Actions,
        private cartService: CartService,
    ) { }

    getProductsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartAction.loadVinhosEffect),
            map(action => action['payload']),
            // catchError(error => error),
            exhaustMap(res => this.cartService.getProducts()),
            map(products => {
                return CartAction.setVinhos({ payload: products});
            })
        ),
    );

    edit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartAction.editVinhosEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.cartService.edit(product)
                .pipe(
                    map(product => {
                        CartAction.edit({ payload: product});
                        return CartAction.loadVinhosEffect({ payload: null});
                    })
                )
            )
        )
    );

    add$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartAction.addVinhosEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.cartService.create(product)
                .pipe(
                    map(product => CartAction.add({ payload: product}))
                )
            )
        )
    );

    desativar$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartAction.desativarVinhoEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.cartService.desativar(product)
                .pipe(
                    map(product => CartAction.loadVinhosEffect({ payload: null}))
                )
            )
        )
    );
}