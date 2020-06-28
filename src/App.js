import React from 'react';
import './App.sass';
import Header from './components/Header';
import Category from './components/Category';
import PizzaBlock from './components/screens/pizzaBlock';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Category />
            <PizzaBlock />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
