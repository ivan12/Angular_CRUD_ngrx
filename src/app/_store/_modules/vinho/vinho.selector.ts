import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VinhoState } from "../../vinho-store.module";

export const vinhoState = createFeatureSelector<VinhoState>('vinho')

export namespace VinhoSelector {
    export const vinho = createSelector(vinhoState, (state) => state);
    export const quantidadeVinhoCarrinho = createSelector(vinhoState, (state) => state.quantidadeCarrinho);
}