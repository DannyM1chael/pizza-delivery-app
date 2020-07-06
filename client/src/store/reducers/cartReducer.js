import * as actions from '../actions';

const initialState = {
  cart: [],
  qty: 0,
  total: 0,
  delivery: 5,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_QTY:
      return {
        ...state,
        cart: state.cart.map((existedItem) => {
          if (existedItem.id === action.payload.id) {
            return {
              ...existedItem,
              qty: action.payload.qty,
            };
          }
          return existedItem;
        }),
      };
    case actions.GET_TOTALS:
      let { total, qty } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;
          cartTotal.total += itemTotal;
          cartTotal.qty += qty;
          return cartTotal;
        },
        { total: 0, qty: 0 },
      );
      return { ...state, total, qty };
    case actions.DELETE_FROM_CART:
      return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id) };
    case actions.CLEAR_CART:
      return { ...state, cart: [], qty: 0, total: 0 };
    case actions.UPDATE_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case actions.TOGGLE_QTY:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === 'increase') {
              return (cartItem = { ...cartItem, qty: cartItem.qty + 1 });
            }
            if (action.payload.toggle === 'decrease') {
              return (cartItem = { ...cartItem, qty: cartItem.qty - 1 });
            }
          }
          return cartItem;
        }),
      };
    case actions.PLACE_ORDER:
      return { ...state, cart: [], qty: 0, delivery: 0, total: 0 };
    default:
      return state;
  }
};
