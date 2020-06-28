import React from 'react';

export default function Cart() {
  const cartEmtyImg = process.env.PUBLIC_URL + 'assets/img/empty-cart.png';
  return (
    <div class="container container--cart">
      <div class="cart cart--empty">
        <h2>Cart is empty</h2>
        <p>It's seems to be you haven't order pizza yet</p>
        <img src={cartEmtyImg} alt="Empty cart" />
        <a href="/" class="button button--black">
          <span>Вернуться назад</span>
        </a>
      </div>
    </div>
  );
}
