import { createReducer, on, Action } from '@ngrx/store'
import { VinhoState } from '../../vinho-store.module';
import {StoreVinhoAction} from "./storeVinho.action";
import {CartAction} from "../cart/cart.action";

export namespace StoreVinhoReducer {
    const storeVinho: {
        products: VinhoState[], productEdit: undefined;
    } = {
        products: [], productEdit: undefined
    }
    const _setProducts = (state: any, action: Action) => ({ ...state, products: action['payload']});
    const _setEdit = (state: any, action: Action) => ({ ...state, productEdit: action['payload'] });
    const _clearEdit = (state: any, action: Action) => ({ ...state, productEdit: undefined });

    const _vinhoReduces = createReducer(storeVinho,
        on(StoreVinhoAction.setProducts, _setProducts),
        on(StoreVinhoAction.edit, _setEdit),
        on(StoreVinhoAction.clearEdit, _clearEdit),
    )
    export function reducer(state: any, action: Action) {
        return _vinhoReduces(state, action)
    }
}