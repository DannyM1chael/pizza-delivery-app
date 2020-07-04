import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../../router/url';
import { useSelector } from 'react-redux';

export default function CartBottom() {
  const counter = useSelector((state) => state.app.amount);
  const total = useSelector((state) => state.app.total);

  return (
    <div className="cart__bottom">
      <div className="cart__bottom-details">
        <span>
          All: <b>{counter} pieces</b>
        </span>
        <span>
          Total: <b>&euro;{total}</b>
        </span>
      </div>
      <div className="cart__bottom-buttons">
        <Link to={URL.HOME} className="button button--outline button--add go-back-btn">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to home</span>
        </Link>
        <div className="button pay-btn">
          <span>Order Now</span>
        </div>
      </div>
    </div>
  );
}
