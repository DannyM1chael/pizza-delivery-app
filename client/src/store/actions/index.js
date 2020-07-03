import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateCartCounter = createAction('UPDATE_CART_COUNTER');
export const updateCart = createAction('UPDATE_CART');
export const updateTotalCart = createAction('UPDATE_TOTAL_CART');
export const deleteFromCart = createAction('DELETE_FROM_CART');
export const filterItems = createAction('FILTER_ITEMS');
export const sortItems = createAction('SORT_ITEMS');
export const showLoader = createAction('SHOW_LOADER');
export const fetchItemsSuccess = createAction('FETCH_ITEMS_SUCCESS');
export const hideLoader = createAction('HIDE_LOADER');

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(showLoader());
    axios.get('http://localhost:4000/').then((response) => {
      const items = response.data;
      dispatch(fetchItemsSuccess(items));
      dispatch(hideLoader());
    });
  };
};
