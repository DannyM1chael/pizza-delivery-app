import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const initialState = {
  cart: [],
  all: 0,
  total: 0,
};

export const app = createReducer(initialState, {
  [actions.updateCartCounter]: (state) => ({ ...state, all: state.all + 1 }),
  [actions.updateCart]: (state, payload) => ({ ...state, cart: payload }),
  [actions.updateTotalCart]: (state, payload) => ({ ...state, total: state.total + 10 }),
  [actions.deleteFromCart]: (state, payload) => {
    const deleteItem = state.cart.filter((item) => item.id !== payload.id);
    return {
      ...state,
      cart: [...deleteItem],
    };
  },
});
