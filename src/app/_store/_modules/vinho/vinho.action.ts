import {createAction, props} from '@ngrx/store';

export namespace VinhosAction {
    export enum ActionTypes {
        ADD = 'ADD',
        ADD_VINHO_MY_PRODUCTS = 'ADD_VINHO_MY_PRODUCTS',
        EDIT = 'EDIT',
        SET_VINHOS = 'SET_VINHOS',
        ADD_TOTAL = 'ADD_TOTAL',
        REDUCE_TOTAL = 'REDUCE_TOTAL',
        CLEAR_TOTAL = 'CLEAR_TOTAL',
        REMOVE = 'REM',
        REMOVE_ALL = 'REMOVE_ALL',

        LOAD_VINHOS_EFFECT = 'GET_VINHOS_EFFECT',
        ADD_EFFECT = 'ADD_EFFECT',
        EDIT_EFFECT = 'EDIT_EFFECT',
        REMOVE_EFFECT = 'REM_EFFECT',

        CLEAR_EDIT = 'CLEAR_EDIT'
    }

    // Todo Actions Reduce

    export const add  = createAction(ActionTypes.ADD, props<{ payload : any }>());

    export const edit  = createAction(ActionTypes.EDIT, props<{ payload : any }>());

    export const setVinhos  = createAction(ActionTypes.SET_VINHOS, props<{ payload : any }>());

    export const remove  = createAction(ActionTypes.REMOVE, props<{ payload : any }>());

    export const removeAll  = createAction(ActionTypes.REMOVE_ALL, props<{ payload : any }>());


    export const addTotal  = createAction(ActionTypes.ADD_TOTAL, props<{ payload : any }>());

    export const reduceTotal  = createAction(ActionTypes.REDUCE_TOTAL, props<{ payload : any }>());

    export const clearTotal  = createAction(ActionTypes.CLEAR_TOTAL, props<{ payload : any }>());

    export const clearEdit  = createAction(ActionTypes.CLEAR_EDIT, props<{ payload : any }>());

    // Todo Actions Effect

    export const loadVinhosEffect  = createAction(ActionTypes.LOAD_VINHOS_EFFECT, props<{ payload : any }>());

    export const addVinhosEffect  = createAction(ActionTypes.ADD_EFFECT, props<{ payload : any }>());

    export const editVinhosEffect  = createAction(ActionTypes.EDIT_EFFECT, props<{ payload : any }>());

    export const removeVinhosEffect  = createAction(ActionTypes.REMOVE_EFFECT, props<{ payload : any }>());

    export const addVinhoMyProducts  = createAction(ActionTypes.ADD_VINHO_MY_PRODUCTS, props<{ payload : any }>());

}
