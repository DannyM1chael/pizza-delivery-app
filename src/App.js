import React from 'react';
import './App.sass';

import { Header, Category, Banner, Home } from './components';
import { categories, items, types, sizes, sorts } from './api';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Banner />
        <div className="content">
          <div className="container">
            <Category categories={categories} sorts={sorts} />
            <Home items={items} types={types} sizes={sizes} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
