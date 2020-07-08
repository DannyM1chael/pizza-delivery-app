import axios from 'axios';

export const FILTER_ITEMS = 'FILTER_ITEMS';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const GET_TOTALS = 'GET_TOTALS';
export const UPDATE_QTY = 'UPDATE_QTY';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_QTY = 'TOGGLE_QTY';
export const PLACE_ORDER = 'PLACE_ORDER';

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
    axios.get('/api/items').then((response) => {
      const items = response.data;
      dispatch({
        type: FETCH_ITEMS,
        payload: items,
      });
      dispatch(hideLoader());
    });
  };
};

export const placeOrder = () => {
  return (dispatch) => {
    dispatch({
      type: PLACE_ORDER,
    });
  };
};
