import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_CART, GET_TOTALS, UPDATE_QTY } from '../../../../../store/actions';

export default function AddBtn({ id, size, type }) {
  const itemData = useSelector((state) => state.main.items);
  const cartData = useSelector((state) => state.app.cart);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const addedItem = itemData.find((item) => item.id === id);
    const existedItem = cartData.find((item) => id === item.id);

    let cartItem = {
      ...addedItem,
      size: addedItem.sizes[size],
      type: addedItem.types[type],
    };

    if (existedItem) {
      dispatch({
        type: UPDATE_QTY,
        payload: { id, qty: existedItem.qty + 1 },
      });
    } else {
      dispatch({
        type: UPDATE_CART,
        payload: cartItem,
      });
    }
    dispatch({
      type: GET_TOTALS,
    });
  };

  return (
    <div className="button button--outline button--add" onClick={handleAddToCart}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Add</span>
    </div>
  );
}
