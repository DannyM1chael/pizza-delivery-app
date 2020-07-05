import React from 'react';

export default function Total() {
  return (
    <div className="col-md-12 d-flex mb-3">
      <div className="cart-total">
        <h3>Cart Totals</h3>
        <p className="d-flex">
          <span>Subtotal</span>
          <span>&euro;0</span>
        </p>
        <p className="d-flex">
          <span>Delivery</span>
          <span>&euro;0</span>
        </p>
        <p className="d-flex total-price">
          <span>Total</span>
          <span>&euro;0</span>
        </p>
      </div>
    </div>
  );
}
