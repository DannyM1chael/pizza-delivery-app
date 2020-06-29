import React from 'react';
import { Link } from 'react-router-dom';
import CartBtn from '../CartBtn';

export default function Header() {
  const logoImg = process.env.PUBLIC_URL + './assets/img/pizza-logo.svg';
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img width="38" src={logoImg} alt="Pizza logo" />
          </Link>
          <div>
            <h1>Pizza Delivery</h1>
            <p>Order our best pizza today!</p>
          </div>
        </div>
        <CartBtn />
      </div>
    </div>
  );
}
