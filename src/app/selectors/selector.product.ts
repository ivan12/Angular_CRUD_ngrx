import { createSelector } from "@ngrx/store";

export const state = (state: any) => state;

export namespace CartSelector {
    export const productEdit = createSelector(state, (state) => state.productEdit)
    export const products = createSelector(state, (state) => state.products)
}