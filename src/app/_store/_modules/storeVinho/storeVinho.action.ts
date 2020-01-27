import {createAction, props} from '@ngrx/store';

export namespace StoreVinhoAction {
    export enum ActionTypes {
        SET_PRODUCTS               = 'SET_PRODUCTS',
        EDIT                       = 'EDIT',
        CLEAR_EDIT                 = 'CLEAR_EDIT',
        LOAD_VINHOS_EFFECT         = 'GET_VINHOS_EFFECT',
        ADD_EFFECT                 = 'ADD_EFFECT',
        EDIT_EFFECT                = 'EDIT_EFFECT',
        REMOVE_EFFECT              = 'REM_EFFECT',
        DESATIVAR_EFFECT           = 'DESATIVAR_EFFECT'
    }

    // Todo Actions Reducer

    export const setProducts  = createAction(ActionTypes.SET_PRODUCTS, props<{ payload : any }>());

    export const edit  = createAction(ActionTypes.EDIT, props<{ payload : any }>());

    export const clearEdit  = createAction(ActionTypes.CLEAR_EDIT, props<{ payload : any }>());

    // Todo Actions Effect

    export const loadVinhosEffect  = createAction(ActionTypes.LOAD_VINHOS_EFFECT, props<{ payload : any }>());

    export const addVinhosEffect  = createAction(ActionTypes.ADD_EFFECT, props<{ payload : any }>());

    export const editVinhosEffect  = createAction(ActionTypes.EDIT_EFFECT, props<{ payload : any }>());

    export const removeVinhosEffect  = createAction(ActionTypes.REMOVE_EFFECT, props<{ payload : any }>());

    export const desativarVinhoEffect  = createAction(ActionTypes.DESATIVAR_EFFECT, props<{ payload : any }>());

}
