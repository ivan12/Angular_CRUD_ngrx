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

    export const add  = createAction(ActionTypes.ADD, props<{ payload : any }>());

    export const remove  = createAction(ActionTypes.REMOVE, props<{ payload : any }>());

    export const edit  = createAction(ActionTypes.EDIT, props<{ payload : any }>());

    export const getVinhos  = createAction(ActionTypes.GET_VINHOS, props<{ payload : any }>());

    export const addVinhosEffect  = createAction(ActionTypes.ADD_EFFECT, props<{ payload : any }>());

    export const editVinhosEffect  = createAction(ActionTypes.EDIT_EFFECT, props<{ payload : any }>());

    export const removeVinhosEffect  = createAction(ActionTypes.REMOVE_EFFECT, props<{ payload : any }>());

    export const loadVinhosEffect  = createAction(ActionTypes.LOAD_VINHOS_EFFECT, props<{ payload : any }>());

}
