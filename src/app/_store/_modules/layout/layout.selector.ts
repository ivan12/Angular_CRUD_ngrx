import { TryState, LayoutState } from '../../vinho-store.module'
import { createFeatureSelector, createSelector } from '@ngrx/store'

export namespace LayoutSelector {

    export const layoutState = createFeatureSelector<LayoutState>('layout')

    export const showEdit = createSelector(layoutState, (state) => state.showEdit)
}