import * as actions from '../actions';

const initialState = {
  cart: [],
  counter: 0,
  amount: 0,
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_CART_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case actions.UPDATE_CART_TOTAL:
      let cartTotal = state.cart.reduce((total, cartItem) => total + cartItem.price, 0);
      return {
        ...state,
        total: cartTotal,
      };
    case actions.DELETE_FROM_CART:
      return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id) };
    case actions.DELETE_ALL_FROM_CART:
      return { ...state, cart: [], counter: 0, amount: 0, total: 0 };
    case actions.UPDATE_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case actions.TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === 'increase') {
              return (cartItem = { ...cartItem, cartItem: state.amount + 1 });
            }
            if (action.payload.toggle === 'decrease') {
              return (cartItem = { ...cartItem, cartItem: state.amount - 1 });
            }
          }
          return cartItem;
        }),
      };
    default:
      return state;
  }
};
