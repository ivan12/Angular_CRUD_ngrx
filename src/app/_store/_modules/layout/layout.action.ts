import { createAction, props } from '@ngrx/store';

export namespace LayoutAction {
    export enum LayoutType {
        SHOW_HIDE_EDIT = '[LAYOUT] show or hide edit modal',
    }

    export const showHideEdit = createAction(LayoutType.SHOW_HIDE_EDIT, props<{payload: boolean}>())
}