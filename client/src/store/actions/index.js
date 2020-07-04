import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateTotalCart = createAction('UPDATE_TOTAL_CART');
export const filterItems = createAction('FILTER_ITEMS');
export const sortItems = createAction('SORT_ITEMS');

export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const UPDATE_CART_COUNTER = 'UPDATE_CART_COUNTER';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const DELETE_ALL_FROM_CART = 'DELETE_ALL_FROM_CART';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(showLoader());
    axios.get('http://localhost:4000/').then((response) => {
      const items = response.data;
      dispatch({
        type: FETCH_ITEMS,
        payload: items,
      });
      dispatch(hideLoader());
    });
  };
};
