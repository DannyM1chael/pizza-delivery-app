import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import createRootReducer from './reducer';
import thunk from 'redux-thunk';
import { assignAll } from 'redux-act';
import * as actions from './actions';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(thunk)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    preloadedState,
  );
  assignAll(actions, store);
  return store;
}
