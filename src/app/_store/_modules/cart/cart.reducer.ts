import { createReducer, on, Action } from '@ngrx/store'
import {CartAction} from "./cart.action";

export namespace CartReducer {
    const cart: { total: number; productEdit: {}; products: any[], myProducts: any[] } = {
        productEdit: undefined,
        products: [],
        myProducts: [],
        total: 0
    }

    const _setPro = (state: any, action: Action) => ({ ...state, products: action['payload']});
    const _addVinhoMyProducts = (state: any, action: Action) => ({ ...state, myProducts: state.myProducts.concat(action['payload']) });
    const _setVinhoMyProducts = (state: any, action: Action) => ({ ...state, myProducts: action['payload']});
    const _setEdit = (state: any, action: Action) => ({ ...state, productEdit: action['payload'] });
    const _setRemove = (state: any, action: Action) => ({ ...state, myProducts: state.myProducts.filter(myProduct => myProduct != action['payload'])});
    const _setRemoveAll = (state: any, action: Action) => ({ ...state, myProducts: []});

    const _setAddtotal = (state: any, action: Action) => ({ ...state, total: (state.total + action['payload'])});
    const _setReduceTotal = (state: any, action: Action) => ({ ...state,  total: (state.total - action['payload'])});

    const _setClearTotal = (state: any, action: Action) => ({ ...state,  total: 0 });
    const _clearEdit = (state: any, action: Action) => ({ ...state, productEdit: undefined });

    const _addQuantidadeCarrinhoProduct = (state: any, action: Action) => ({ ...state, myProducts: _setQuantidadeCarrinho([].concat(...action['payload']), action['product'], 'add')});
    const _reduceQuantidadeCarrinhoProduct = (state: any, action: Action) => ({ ...state, myProducts: _setQuantidadeCarrinho([].concat(...action['payload']), action['product'], 'reduce')});

    function _setQuantidadeCarrinho(list, product, type) {
        let listTemp = [...list];
        let indexElem = _indexById(listTemp, product);
        if (listTemp[indexElem]) {
            let productTemp = {...listTemp[indexElem]};
            if (type == 'add') {
                productTemp.quantidadeCarrinho++;
            } else {
                productTemp.quantidadeCarrinho--;
            }
            listTemp[indexElem] = productTemp;
        }
        return listTemp;
    }

    function _indexById(list, item) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id == item.id) {
                return i;
            }
        }
        return -1;
    }

    const _vinhoReduces = createReducer(cart,
        on(CartAction.setVinhos, _setPro),
        on(CartAction.edit, _setEdit),
        on(CartAction.remove, _setRemove),
        on(CartAction.removeAll, _setRemoveAll),
        on(CartAction.addVinhoMyProducts, _addVinhoMyProducts),
        on(CartAction.setVinhoMyProducts, _setVinhoMyProducts),
        on(CartAction.addQuantidadeCarrinhoProduct, _addQuantidadeCarrinhoProduct),
        on(CartAction.reduceQuantidadeCarrinhoProduct, _reduceQuantidadeCarrinhoProduct),

        on(CartAction.addTotal, _setAddtotal),
        on(CartAction.reduceTotal, _setReduceTotal),
        on(CartAction.clearTotal, _setClearTotal),

        on(CartAction.clearEdit, _clearEdit),
    )
    export function reducer(state: any, action: Action) {
        return _vinhoReduces(state, action);
    }

}