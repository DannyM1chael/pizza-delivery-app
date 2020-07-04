import * as actions from '../actions';

const initialState = {
  items: [],
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ITEMS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
