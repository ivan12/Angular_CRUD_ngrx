import {createAction, props} from '@ngrx/store';

export namespace CartAction {
    export enum ActionTypes {
        ADD                        = 'ADD',
        ADD_VINHO_MY_PRODUCTS      = 'ADD_VINHO_MY_PRODUCTS',
        SET_VINHO_MY_PRODUCTS      = 'SET_VINHO_MY_PRODUCTS',
        ADD_TOTAL                  = 'ADD_TOTAL',
        REDUCE_TOTAL               = 'REDUCE_TOTAL',
        CLEAR_TOTAL                = 'CLEAR_TOTAL',
        REMOVE                     = 'REM',
        REMOVE_ALL                 = 'REMOVE_ALL',
        ADD_QUANTIDADE_CARRINHO    = 'ADD_QUANTIDADE_CARRINHO',
        REDUCE_QUANTIDADE_CARRINHO = 'REDUCE_QUANTIDADE_CARRINHO',
    }

    // Todo Actions Reduce

    export const add  = createAction(ActionTypes.ADD, props<{ payload : any }>());

    export const remove  = createAction(ActionTypes.REMOVE, props<{ payload : any }>());

    export const removeAll  = createAction(ActionTypes.REMOVE_ALL, props<{ payload : any }>());

    export const addTotal  = createAction(ActionTypes.ADD_TOTAL, props<{ payload : any }>());

    export const reduceTotal  = createAction(ActionTypes.REDUCE_TOTAL, props<{ payload : any }>());

    export const clearTotal  = createAction(ActionTypes.CLEAR_TOTAL, props<{ payload : any }>());

    export const addVinhoMyProducts  = createAction(ActionTypes.ADD_VINHO_MY_PRODUCTS, props<{ payload : any }>());

    export const setVinhoMyProducts  = createAction(ActionTypes.SET_VINHO_MY_PRODUCTS, props<{ payload : any }>());

    export const addQuantidadeCarrinhoProduct  = createAction(ActionTypes.ADD_QUANTIDADE_CARRINHO, props<{ payload : any, index: any }>());

    export const reduceQuantidadeCarrinhoProduct  = createAction(ActionTypes.REDUCE_QUANTIDADE_CARRINHO, props<{ payload : any, index: any }>());

}
