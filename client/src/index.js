import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import App from './App';
import Spinner from './components/Spinner';
import './index.sass';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
