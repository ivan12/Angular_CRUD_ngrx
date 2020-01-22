import {createFeatureSelector, createSelector} from "@ngrx/store";

export const vinhoState =  createFeatureSelector<any>('vinho')

export namespace VinhoSelector {
    export const productEdit = createSelector(vinhoState, (state) => state.productEdit)
    export const products = createSelector(vinhoState, (state) => state.products)
}