import React from 'react';
import { connect } from 'react-redux';
import { CartTop, CartBottom, Item, EmptyCart } from './components';

function Cart({ cartData = [] }) {
  return (
    <div className="container container--cart">
      {cartData.length !== 0 ? (
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

const mapStateToProps = (state) => {
  return {
    cartData: state.app.cart,
  };
};

export default connect(mapStateToProps)(Cart);
