import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreVinhoState } from "../../vinho-store.module";

export const storeState = createFeatureSelector<StoreVinhoState>('storeVinho')

export namespace StoreVinhoSelector {
    export const products = createSelector(storeState, (state) => state.products);
    export const productEdit = createSelector(storeState, (state) => state.productEdit);
}