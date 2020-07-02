import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import { BrowserRouter } from 'react-router-dom';
import * as actions from './actions';
import { categories, sorts } from '../api';

const initialState = {
  category: categories,
  sort: sorts,
  cart: [],
  items: [],
};

const rootReducer = createReducer(
  {
    [actions.updateCart]: (state, payload) => ({ ...state, cart: payload }),
    [actions.updateCartCounter]: (state, payload) => {
      const filtered = state.cart.filter((item) => item.id === payload.id);
      filtered[0].qty = payload.qty;
      return {
        ...state,
        cart: [...state.cart],
      };
    },
  },
  initialState,
);

export default (history) =>
  combineReducers({
    router: BrowserRouter(history),
    app: rootReducer,
  });
