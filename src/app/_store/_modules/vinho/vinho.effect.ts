import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { VinhoService } from "./vinho.service";
import { VinhoAction } from "./vinho.action";
import { CartAction } from "../cart/cart.action";

@Injectable()
export class VinhoEffects {
    constructor(
        private actions$: Actions,
        private vinhoService: VinhoService,
    ) { }

    edit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VinhoAction.editVinhoEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.vinhoService.edit(product)
                .pipe(
                    map(product => {
                        VinhoAction.setVinho({ payload: product})
                        return CartAction.loadVinhosEffect({ payload: null})
                    })
                )
            )
        )
    );

    desativar$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VinhoAction.desativarVinhoEffect),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.vinhoService.desativar(product)
                .pipe(
                    map(product => CartAction.loadVinhosEffect({ payload: null}))
                )
            )
        )
    );
}