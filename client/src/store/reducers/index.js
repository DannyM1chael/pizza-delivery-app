import { combineReducers } from 'redux';
import { cartReducer } from './CartReducer';
import { cats } from './filterReducer';
import { fetchReducer } from './fetchReducer';
import { loadReducer } from './loadReducer';

export const rootReducer = combineReducers({
  app: cartReducer,
  cats,
  main: fetchReducer,
  load: loadReducer,
});
