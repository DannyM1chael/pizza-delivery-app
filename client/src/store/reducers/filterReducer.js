import * as actions from '../actions';

const initialState = {
  categories: ['Cheese', 'Meat', 'Vegetarian', 'Chili', 'Cheese & Meat'],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILTER_ITEMS:
      return { ...state, categories: state.categories };
    default:
      return state;
  }
};
