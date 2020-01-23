import { createReducer, on, Action } from '@ngrx/store'
import { VinhosAction } from './vinho.action';

export namespace VinhoReducer {
    const cart: { total: number; productEdit: {}; products: any[], myProducts: any[] } = {
        productEdit: undefined,
        products: [],
        myProducts: [],
        total: 0
    }

    const _setPro = (state: any, action: Action) => ({ ...state, products: action['payload']})
    const _setAdd = (state: any, action: Action) => ({ ...state, myProducts: action['payload'] })
    const _addVinhoMyProducts = (state: any, action: Action) => ({ ...state, myProducts: state.myProducts.concat({...action['payload']}) })
    const _setEdit = (state: any, action: Action) => ({ ...state, productEdit: action['payload'] })
    const _setRemove = (state: any, action: Action) => ({ ...state, myProducts: state.myProducts.filter(myProduct => myProduct != action['payload'])})
    const _setRemoveAll = (state: any, action: Action) => ({ ...state, myProducts: []})

    const _setAddtotal = (state: any, action: Action) => ({ ...state, total: (state.total + action['payload'])})
    const _setReduceTotal = (state: any, action: Action) => ({ ...state,  total: (state.total - action['payload'])})
    const _setClearTotal = (state: any, action: Action) => ({ ...state,  total: 0 })

    const _clearEdit = (state: any, action: Action) => ({ ...state, productEdit: undefined })

    const _vinhoReduces = createReducer(cart,
        on(VinhosAction.setVinhos, _setPro),
        on(VinhosAction.add, _setAdd),
        on(VinhosAction.edit, _setEdit),
        on(VinhosAction.remove, _setRemove),
        on(VinhosAction.removeAll, _setRemoveAll),
        on(VinhosAction.addVinhoMyProducts, _addVinhoMyProducts),

        on(VinhosAction.addTotal, _setAddtotal),
        on(VinhosAction.reduceTotal, _setReduceTotal),
        on(VinhosAction.clearTotal, _setClearTotal),

        on(VinhosAction.clearEdit, _clearEdit),
    )
    export function reducer(state: any, action: Action) {
        return _vinhoReduces(state, action)
    }
}