import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import {catchError, exhaustMap, map, switchMap} from "rxjs/operators";
import { VinhoService } from "./vinho.service";
import { VinhosAction } from "./vinho.action";

@Injectable()
export class VinhoEffects {
    constructor(
        private actions$: Actions,
        private vinhoService: VinhoService,
    ) { }

    getProductsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VinhosAction.loadVinhosEffect),
            map(action => action['payload']),
            // catchError(error => error),
            exhaustMap(res => this.vinhoService.getProducts()),
            map(products => {
                console.log('getProductsEffect$ products = ', products);
                return VinhosAction.setVinhos({ payload: products})
            })
        ),
    );

    edit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VinhosAction.editVinhosEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.vinhoService.edit(product)
                .pipe(
                    map(product => VinhosAction.edit({ payload: product}))
                )
            )
        )
    );

    add$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VinhosAction.addVinhosEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.vinhoService.create(product)
                .pipe(
                    map(product => VinhosAction.add({ payload: product}))
                )
            )
        )
    );

    remove$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VinhosAction.removeVinhosEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.vinhoService.delete(product)
                .pipe(
                    map(product => VinhosAction.remove({ payload: product}))
                )
            )
        )
    );
}