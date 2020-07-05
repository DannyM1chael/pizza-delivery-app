import React from 'react';

export default function Payment() {
  return (
    <div className="col-md-12">
      <div className="cart-detail p-3 p-md-4">
        <h3 className="billing-heading mb-4">Payment Method</h3>
        <div className="form-group">
          <div className="col-md-12">
            <div className="radio">
              <label>
                <input type="radio" name="optradio" className="mr-2" /> Direct Bank Tranfer
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <div className="radio">
              <label>
                <input type="radio" name="optradio" className="mr-2" /> Check Payment
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <div className="radio">
              <label>
                <input type="radio" name="optradio" className="mr-2" /> Paypal
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
