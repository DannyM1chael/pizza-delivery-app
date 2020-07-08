import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../../router/url';
import { useSelector, useDispatch } from 'react-redux';
import { GET_TOTALS } from '../../../../store/actions';

export default function CartBottom() {
  const qty = useSelector((state) => state.app.qty);
  const total = useSelector((state) => state.app.total);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_TOTALS,
    });
  });

  return (
    <div className="cart__bottom">
      <div className="cart__bottom-details">
        <span>
          All: <b>{qty} pieces</b>
        </span>
        <span>
          Total:{' '}
          <b>
            &euro;{total}&nbsp;(${(total * 1.12).toFixed(2)})
          </b>
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
          <span>Back to Menu</span>
        </Link>
        <div className="button pay-btn">
          <Link to={URL.CHECKOUT}>
            <span>Proceed to Checkout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
