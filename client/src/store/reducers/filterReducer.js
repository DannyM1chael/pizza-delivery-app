import * as actions from '../actions';

const initialState = {
  categories: ['Meat', 'Vegetarian', 'Cheese', 'Chili'],
  sorts: ['popularity', 'price', 'name'],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILTER_ITEMS:
      return { ...state, categories: state.categories };
    case actions.SORT_ITEMS:
      return { ...state, sorts: state.sorts };
    default:
      return state;
  }
};
