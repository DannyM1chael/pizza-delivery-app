import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
import App from './App';
import Spinner from './components/Spinner';
import configureStore, { history } from './store/conf';
import './index.sass';

// const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router history={history}>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
