import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { filterReducer } from './filterReducer';
import { fetchReducer } from './fetchReducer';
import { loadReducer } from './loadReducer';

export const rootReducer = combineReducers({
  app: cartReducer,
  filter: filterReducer,
  main: fetchReducer,
  load: loadReducer,
});
