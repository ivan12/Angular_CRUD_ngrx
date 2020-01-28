import { createReducer, on, Action } from '@ngrx/store'
import {CartAction} from "./cart.action";

export namespace CartReducer {
    const cart: { items: any[], totalPrice: number } = {
        items: [],
        totalPrice: 0
    }

    const _addVinhoMyProducts = (state: any, action: Action) => ({ ...state, items: state.items.concat(action['payload']) });
    const _setVinhoMyProducts = (state: any, action: Action) => ({ ...state, items: action['payload']});

    const _setRemove = (state: any, action: Action) => ({ ...state, items: state.items.filter(myProduct => myProduct != action['payload'])});
    const _setRemoveAll = (state: any, action: Action) => ({ ...state, items: []});

    const _setAddtotal = (state: any, action: Action) => ({ ...state, totalPrice: (state.totalPrice + Number(action['payload']))});
    const _setReduceTotal = (state: any, action: Action) => ({ ...state,  totalPrice: (state.totalPrice - Number(action['payload']))});

    const _setClearTotal = (state: any, action: Action) => ({ ...state,  totalPrice: 0 });

    const _addQuantidadeCarrinhoProduct = (state: any, action: Action) => ({ ...state, items: _setQuantidadeCarrinho([].concat(...action['payload']), action['index'], 'add')});
    const _reduceQuantidadeCarrinhoProduct = (state: any, action: Action) => ({ ...state, items: _setQuantidadeCarrinho([].concat(...action['payload']), action['index'], 'reduce')});

    function _setQuantidadeCarrinho(list, index, type) {
        let listTemp = [].concat(list);
        let productTemp = listTemp[index];
        if (productTemp) {
            let productTempOtherReference = {...productTemp};
            if (type == 'add') {
                productTempOtherReference.quantidadeCarrinho++;
            } else {
                productTempOtherReference.quantidadeCarrinho--;
            }
            listTemp[index] = productTempOtherReference;
        }
        return listTemp;
    }

    function _atualizaItems(listMyProducts, index, product) {
        let listTemp = [...listMyProducts];
        let myProductTemp = listTemp[index];
        if (myProductTemp) {
            let productTempOtherReference = {...product};
            productTempOtherReference.quantidadeCarrinho =  myProductTemp.quantidadeCarrinho;
            listTemp[index] = productTempOtherReference;
        }
        return listTemp;
    }

    const _vinhoReduces = createReducer(cart,
        on(CartAction.remove, _setRemove),
        on(CartAction.removeAll, _setRemoveAll),
        on(CartAction.addVinhoMyProducts, _addVinhoMyProducts),
        on(CartAction.setVinhoMyProducts, _setVinhoMyProducts),
        on(CartAction.addQuantidadeCarrinhoProduct, _addQuantidadeCarrinhoProduct),
        on(CartAction.reduceQuantidadeCarrinhoProduct, _reduceQuantidadeCarrinhoProduct),

        on(CartAction.addTotal, _setAddtotal),
        on(CartAction.reduceTotal, _setReduceTotal),
        on(CartAction.clearTotal, _setClearTotal)
    )
    export function reducer(state: any, action: Action) {
        return _vinhoReduces(state, action);
    }

}