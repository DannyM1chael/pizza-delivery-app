import { combineReducers } from 'redux';
import { updateCartReducer } from './updateCartReducer';

export const rootReducer = combineReducers({
  counter: updateCartReducer,
});
