import { combineReducers } from 'redux';
import { app } from './CartReducer';
import { cats } from './filterReducer';
import { main } from './fetchReducer';
import { load } from './loadReducer';

export const rootReducer = combineReducers({
  app,
  cats,
  main,
  load,
});
