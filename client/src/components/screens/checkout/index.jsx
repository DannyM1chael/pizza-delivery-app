import React from 'react';
import { Link } from 'react-router-dom';
import * as URL from '../../../router/url';
import { ToastContainer, toast } from 'react-toastify';
import { Payment, Form, Total } from './components';
import 'react-toastify/dist/ReactToastify.css';

export default function Checkout() {
  const notify = () =>
    toast.success('Your order is received', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className="container container--cart">
      <div className="row justify-content-center">
        <Form />
        <div className="col">
          <div className="row mt-5 pt-2">
            <Total />
            <Payment />
          </div>
        </div>
      </div>
      <div className="cart__bottom-buttons">
        <Link to={URL.CART} className="button button--outline button--add go-back-btn">
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
          <span>Back to Cart</span>
        </Link>
        <div className="button pay-btn" onClick={notify}>
          <Link to="#">
            <span>Order Now</span>
          </Link>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
