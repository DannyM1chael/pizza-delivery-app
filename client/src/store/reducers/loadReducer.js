import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const initialState = {
  loading: false,
};

export const load = createReducer(initialState, {
  [actions.showLoader]: (state) => ({ ...state, loading: true }),
  [actions.hideLoader]: (state) => ({ ...state, loading: false }),
});
