import { createReducer, on, Action } from '@ngrx/store'
import { VinhosAction } from '../actions/cart.action';

export namespace VinhoReducer {
    const cart = { payload: undefined }

    const _setPro = (state: any, action: Action): any => ({ ...state, payload: action['payload'] })
    const _setAdd = (state: any, action: Action): any => ({ ...state, payload: action['payload'] })
    const _setEdit = (state: any, action: Action): any => ({ ...state, payload: action['payload'] })
    const _setRemove = (state: any, action: Action): any => ({ ...state, payload: action['payload'] })

    const _profissionalReduces = createReducer(cart,
        on(VinhosAction.getVinhos, _setPro),
        on(VinhosAction.add, _setAdd),
        on(VinhosAction.edit, _setEdit),
        on(VinhosAction.remove, _setRemove),
    )
    export function reducer(state: any, action: Action) {
        return _profissionalReduces(state, action)
    }
}

/*
import { VinhosAction } from '../actions/cart.action';
import { ActionModel } from '../models/action.model';
import { ProductState } from '../models/product.model';
import {CartModel} from "../models/cart.model";

export let cart = {
    products:  [],
    productEdit: undefined,
    total: 0
};

export function cartReducer(state = cart, action: ActionModel) {

    switch (action.type) {
        case ActionTypes.Add:
        {
            state.products.push(action.payload);
            state.total = calculateTotal(state.products);
            console.log('cartReducer() Add = ', state);
            return state;
        }

        case ActionTypes.LoadEdit:
        {
            return state.productEdit;
        }

        case ActionTypes.SetEdit:
        {
            state.productEdit = action.payload;
            return state;
        }

        case ActionTypes.GetProducts:
        {
            console.log('REDUCE GetProducts action = ', action);
            state.products = action.payload;
            return state;
        }

        case ActionTypes.SetProducts:
        {
            console.log('REDUCE SetProducts action.payload = ', action.payload);
            state.products = action.payload;
            return state;
        }

        case ActionTypes.Edit:
        {
            const index = indexOfById(state.products, action.payload.id);
            if (index != -1) {
                state.products[index] = action.payload;
                state.total = calculateTotal(state.products);
            }
            return state;
        }

        case ActionTypes.Remove:
            {
                const index = state.products.indexOf(action.payload);
                state.products.splice(index, 1);
                state.total = calculateTotal(state.products);
                console.log('cartReducer() Remove = ', state);
                return state;
            }

        case ActionTypes.Clear:
            {
                state = new CartModel();
                state.total = calculateTotal(state.products);
                console.log('cartReducer() Clear = ', state);
                return state;
            }
        default:
            return state;
    }
}

function indexOfById(list, id) {
    for (let i = 0; i < list.length; i++) {
        if(list[i].id == id) {
            return i;
        }
    }
    return -1;
}

function calculateTotal(products: ProductModel[]): number {
    let total: number = 0;
    products.forEach(product => {
        total += product.preco;
    });
    return total;
}
*/