import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const initialState = {
  categories: ['Meat', 'Vegetarian', 'Cheese', 'Chili'],
  sorts: ['popularity', 'price', 'name'],
};

export const cats = createReducer(initialState, {
  [actions.filterItems]: (state) => ({ ...state, category: state.category }),
  [actions.sortItems]: (state) => ({ ...state, sorts: state.sorts }),
});
