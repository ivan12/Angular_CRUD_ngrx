import {Injectable} from "@angular/core";
import {Actions, createEffect, Effect, ofType} from "@ngrx/effects";
import {ActionTypes, Add, getProducts, Remove, setEdit} from "../actions/cart.action";
import {catchError, map, switchMap} from "rxjs/operators";
import {VinhoService} from "../services/vinho.service";

@Injectable({ providedIn: 'root' })
export class ProductListEffects {
    constructor(
        private actions$: Actions,
        private vinhoService: VinhoService,
    ) {
    }

    @Effect()
    getProducts$ = createEffect(() =>
    this.actions$.pipe(
        ofType(ActionTypes.GetProducts),
        map(res => res.payload),
        catchError(error => error),
        switchMap(res => this.vinhoService.getProducts().pipe(map(products => {
            console.log('EFFECT GetProducts products = ', products);
            new getProducts(products);
        })))
        )
    );

    @Effect()
    edit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.Edit),
            map(res => res.payload),
            catchError(error => error),
            switchMap(product => this.vinhoService.edit(product).pipe(map(product => setEdit(product))))
        )
    );

    @Effect()
    add$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.Add),
            map(res => res.payload),
            catchError(error => error),
            switchMap(product => this.vinhoService.create(product).pipe(map(product => Add(product))))
        )
    );

    @Effect()
    remove$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ActionTypes.Remove),
            map(res => res.payload),
            catchError(error => error),
            switchMap(product => this.vinhoService.delete(product).pipe(map(product => Remove(product))))
        )
    );
}