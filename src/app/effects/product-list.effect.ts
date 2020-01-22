import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map} from "rxjs/operators";
import {VinhoService} from "../services/vinho.service";
import {VinhosAction} from "../actions/cart.action";

@Injectable({ providedIn: 'root' })
export class ProductListEffects {
    constructor(
        private actions$: Actions,
        private vinhoService: VinhoService,
    ) { }

    @Effect()
    getProductsEffect$ = createEffect(() =>
    this.actions$.pipe(
        ofType(VinhosAction.ActionTypes.LOAD_VINHOS_EFFECT),
        map(action => action['payload']),
        catchError(error => error),
        exhaustMap(res => this.vinhoService.getProducts()
            .pipe(
                map(products => {
                    VinhosAction.getVinhos({ payload: products});
                })
            )
        ),
    ));

    @Effect()
    edit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VinhosAction.ActionTypes.EDIT_EFFECT),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.vinhoService.edit(product)
                .pipe(
                    map(product => {
                        VinhosAction.Edit({ payload: product})
                    })
                )
            )
        )
    );

    @Effect()
    add$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VinhosAction.ActionTypes.ADD_EFFECT),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.vinhoService.create(product)
                .pipe(
                    map(product => {
                        VinhosAction.Add({ payload: product})
                    })
                )
            )
        )
    );

    @Effect()
    remove$ = createEffect(() =>
        this.actions$.pipe(
            ofType(VinhosAction.ActionTypes.REMOVE_EFFECT),
            map(action => action['payload']),
            catchError(error => error),
            exhaustMap(product => this.vinhoService.delete(product)
                .pipe(
                    map(product => {
                        VinhosAction.Remove({ payload: product})
                    })
                )
            )
        )
    );
}