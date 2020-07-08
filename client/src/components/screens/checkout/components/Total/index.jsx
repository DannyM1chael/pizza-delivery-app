import React from 'react';
import { useSelector } from 'react-redux';

export default function Total() {
  const subTotal = useSelector((state) => state.app.total);
  const deliveryCost = useSelector((state) => state.app.delivery);

  let totalWithDelivery = subTotal + deliveryCost;
  return (
    <div className="col-md-12 d-flex mb-3">
      <div className="cart-total">
        <h3>Cart Totals</h3>
        <p className="d-flex">
          <span>Subtotal</span>
          <span>
            &euro;{subTotal}&nbsp;(${(subTotal * 1.12).toFixed(2)})
          </span>
        </p>
        <p className="d-flex">
          <span>Delivery</span>
          <span>
            &euro;{deliveryCost}&nbsp;(${(deliveryCost * 1.12).toFixed(2)})
          </span>
        </p>
        <p className="d-flex total-price">
          <span>Total</span>
          <span>
            &euro;{totalWithDelivery}&nbsp;(${(totalWithDelivery * 1.12).toFixed(2)})
          </span>
        </p>
      </div>
    </div>
  );
}
