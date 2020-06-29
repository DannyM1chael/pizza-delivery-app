import React from 'react';
import './App.sass';

import { Header, Category, PizzaBlock } from './components';
import { categories, items, types, sizes, sorts } from './api';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Category categories={categories} sorts={sorts} />
            <PizzaBlock items={items} types={types} sizes={sizes} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
