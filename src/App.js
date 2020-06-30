import React from 'react';
import { Header } from './components';
import routes from './router/router';
import './App.sass';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">{routes}</div>
      </div>
    </>
  );
}

export default App;
