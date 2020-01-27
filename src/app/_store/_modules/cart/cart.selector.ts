import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../../vinho-store.module";

export const cartState = createFeatureSelector<CartState>('cart')

export namespace CartSelector {
    export const cart = createSelector(cartState, (state) => state);
    export const items = createSelector(cartState, (state) => state.items);
    export const totalPrice = createSelector(cartState, (state) => state.totalPrice);
}