import React from 'react';
import { CartTop, CartBottom, Item, EmptyCart } from './components';
import { useSelector } from 'react-redux';

export default function Cart() {
  const counter = useSelector((state) => state.app.all);
  const cartData = useSelector((state) => state.app.cart);
  return (
    <div className="container container--cart">
      {counter > 0 ? (
        <>
          <CartTop />
          <div className="cart">
            <div className="content__items">
              {cartData.map((item) => (
                <Item key={item.id} {...item} />
              ))}
            </div>
          </div>
          <CartBottom />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
