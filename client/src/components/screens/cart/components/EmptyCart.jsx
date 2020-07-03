import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  const cartEmtyImg = process.env.PUBLIC_URL + 'assets/img/empty-cart.png';
  return (
    <>
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Cart is empty</h2>
          <p>It's seems to be you haven't order pizza yet</p>
          <img src={cartEmtyImg} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </>
  );
}
