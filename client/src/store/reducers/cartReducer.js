import * as actions from '../actions';

const initialState = {
  cart: [],
  counter: 0,
  amount: 0,
  total: 0,
};

// export const app = createReducer(initialState, {
//   [actions.updateTotalCart]: (state) => ({ ...state, total: state.total + 10 }),

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_CART_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case actions.DELETE_FROM_CART:
      return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id) };
    case actions.DELETE_ALL_FROM_CART:
      return { ...state, cart: [], counter: 0, total: 0 };
    case actions.UPDATE_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case actions.TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.id === 'increase') {
              return (cartItem = { ...cartItem, cartItem: state.amount + 1 });
            }
            if (action.payload.id === 'decrease') {
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
