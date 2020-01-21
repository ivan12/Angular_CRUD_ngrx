import { Action } from '@ngrx/store';
import {reduce} from "rxjs/operators";

export enum ActionTypes {
    Add = 'ADD',
    Edit = 'EDIT',
    Remove = 'REM',
    Clear = 'CLE',
    LoadEdit = 'LOAD_EDIT',
    SetEdit = 'SET_EDIT',
    SetProducts = 'SET_PRODUCTS',
    GetProducts = 'GET_PRODUCTS'
}

export const Add = (product: any) => {
    return <Action>{ type: ActionTypes.Add, payload: product };
}

export const Edit = (product: any) => {
    return <Action>{ type: ActionTypes.Edit, payload: product };
}

export const Remove = (product: any) => {
    return <Action>{ type: ActionTypes.Remove, payload: product };
}

export const setEdit = (product: any) => {
    return <Action>{ type: ActionTypes.SetEdit, payload: product };
}

export class getProducts implements Action {
    readonly type = ActionTypes.GetProducts;
    constructor(public payload: any) {
        console.log('Action getProducts payload = ', payload);
    }
}

export const setProducts = (products: any[]) => {
    return <Action>{ type: ActionTypes.SetProducts, payload: products };
}

export const LoadEdit = (product: any) => {
    return <Action>{ type: ActionTypes.LoadEdit, payload: product };
}

export const Clear = () => {
    return <Action>{ type: ActionTypes.Clear, payload: null };
}