import React from 'react';
import { useSelector } from 'react-redux';

export default function Total() {
  const subTotal = useSelector((state) => state.app.total);
  const deliveryCost = useSelector((state) => state.app.delivery);

  return (
    <div className="col-md-12 d-flex mb-3">
      <div className="cart-total">
        <h3>Cart Totals</h3>
        <p className="d-flex">
          <span>Subtotal</span>
          <span>&euro;{subTotal}</span>
        </p>
        <p className="d-flex">
          <span>Delivery</span>
          <span>&euro;{deliveryCost}</span>
        </p>
        <p className="d-flex total-price">
          <span>Total</span>
          <span>&euro;{subTotal + deliveryCost}</span>
        </p>
      </div>
    </div>
  );
}
