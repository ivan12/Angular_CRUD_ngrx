import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../../vinho-store.module";

export const cartState = createFeatureSelector<CartState>('cart')

export namespace CartSelector {
    export const cart = createSelector(cartState, (state) => state);
    export const productEdit = createSelector(cartState, (state) => state.productEdit);
    export const products = createSelector(cartState, (state) => state.products);
    export const myProducts = createSelector(cartState, (state) => state.myProducts);
    export const total = createSelector(cartState, (state) => state.total);
}