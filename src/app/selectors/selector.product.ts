import { CartModel } from '../models/cart.model';
import { createSelector } from "@ngrx/store";

export const state = (state: CartModel) => state;

export namespace CartSelector {
    export const productEdit = createSelector(state, (state) => state.productEdit)
}