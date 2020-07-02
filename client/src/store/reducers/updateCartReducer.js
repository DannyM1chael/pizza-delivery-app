const initialState = {
  cart: 0,
};

export const updateCartReducer = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_CART':
      return state + 1;
    default:
      return state;
  }
};
