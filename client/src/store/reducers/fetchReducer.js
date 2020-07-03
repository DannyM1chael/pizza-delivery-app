import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const initialState = {
  items: [],
};

export const main = createReducer(initialState, {
  [actions.fetchItemsSuccess]: (state, payload) => ({
    ...state,
    items: payload,
  }),
});
