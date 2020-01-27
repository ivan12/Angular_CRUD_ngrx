import {createAction, props} from '@ngrx/store';

export namespace VinhoAction {
    export enum ActionTypes {
        ADD_QUANTIDADE_VINHO        = 'ADD_QUANTIDADE_VINHO',
        DECREMENT_QUANTIDADE_VINHO  = 'DECREMENT_QUANTIDADE_VINHO',
        SET_VINHO                  = 'SET_VINHO',

        EDIT_VINHO_EFFECT           = 'EDIT_VINHO_EFFECT',
        DESATIVAR_VINHO_EFFECT      = 'DESATIVAR_VINHO_EFFECT',
    }

    export const editVinhoEffect  = createAction(ActionTypes.EDIT_VINHO_EFFECT, props<{ payload : any }>());

    export const setVinho  = createAction(ActionTypes.SET_VINHO, props<{ payload : any }>());

    export const addQuantidadeVinho  = createAction(ActionTypes.ADD_QUANTIDADE_VINHO, props<{ payload : any }>());

    export const decrementQuantidadeVinho  = createAction(ActionTypes.DECREMENT_QUANTIDADE_VINHO, props<{ payload : any }>());

    export const desativarVinhoEffect  = createAction(ActionTypes.DESATIVAR_VINHO_EFFECT, props<{ payload : any }>());

}
