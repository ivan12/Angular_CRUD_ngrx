import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { CartAction } from '../cart/cart.action';
import { StoreVinhoService } from './storeVinho.service';
import { StoreVinhoAction } from './storeVinho.action';

@Injectable()
export class StoreVinhoEffect {
    constructor(
        private actions$: Actions,
        private productsService: StoreVinhoService,
    ) { }

    getProductsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreVinhoAction.loadVinhosEffect),
            map(action => action['payload']),
            // catchError(error => error),
            exhaustMap(res => this.productsService.getProducts()),
            map(products => {
                return StoreVinhoAction.setProducts({ payload: products});
            })
        ),
    );

    edit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreVinhoAction.editVinhosEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.productsService.edit(product)
                .pipe(
                    map(product => {
                        StoreVinhoAction.edit({ payload: product});
                        return StoreVinhoAction.loadVinhosEffect({ payload: null});
                    })
                )
            )
        )
    );

    add$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreVinhoAction.addVinhosEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.productsService.create(product)
                .pipe(
                    map(product => {
                        CartAction.add({ payload: product});
                        return StoreVinhoAction.loadVinhosEffect({ payload: null});
                    })
                )
            )
        )
    );

    desativar$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreVinhoAction.desativarVinhoEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.productsService.desativar(product)
                .pipe(
                    map(product => StoreVinhoAction.loadVinhosEffect({ payload: null}))
                )
            )
        )
    );
}