import { LayoutState } from '../../vinho-store.module';
import { Action, createReducer, on } from '@ngrx/store';
import { LayoutAction } from './layout.action';

export namespace LayoutReducer {
  const initialState: LayoutState = {
    showEdit: false
  };

  function _showEdit(state: LayoutState, action: Action): LayoutState {
    return { ...state, showEdit: action['payload'] };
  }

  const _LayoutReducer = createReducer(
    initialState,
    on(LayoutAction.showHideEdit, _showEdit)
  );

  export function reducer(state, action: Action) {
    return _LayoutReducer(state, action);
  }
}
