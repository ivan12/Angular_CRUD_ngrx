import {createAction, props} from '@ngrx/store';

export namespace VinhosAction {
    export enum ActionTypes {
        ADD = 'ADD',
        EDIT = 'EDIT',
        REMOVE = 'REM',

        GET_VINHOS = 'GET_VINHOS',
        LOAD_VINHOS_EFFECT = 'GET_VINHOS_EFFECT',
        ADD_EFFECT = 'ADD',
        EDIT_EFFECT = 'EDIT',
        REMOVE_EFFECT = 'REM'
    }

    export const Add  = createAction(ActionTypes.ADD, props<{ payload : any }>());

    export const Remove  = createAction(ActionTypes.REMOVE, props<{ payload : any }>());

    export const Edit  = createAction(ActionTypes.EDIT, props<{ payload : any }>());

    export const getVinhos  = createAction(ActionTypes.GET_VINHOS, props<{ payload : any }>());

    export const loadVinhosEffect  = createAction(ActionTypes.LOAD_VINHOS_EFFECT, props<{ payload : any }>());

    export const setVinhosEffect  = createAction(ActionTypes.SET_PRODUCTS_EFFECT, props<{ payload : any }>());

    export const setProducts  = createAction(ActionTypes.SET_PRODUCT, props<{ payload : any }>());

    export const LoadEdit  = createAction(ActionTypes.LOAD_EDIT, props<{ payload : any }>());

    export const Clear  = createAction(ActionTypes.CLEAR, props<{ payload : any }>());

}
