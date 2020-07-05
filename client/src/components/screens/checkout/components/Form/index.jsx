import React from 'react';

export default function Form() {
  return (
    <div className="col-xl-7">
      <form action="#" className="billing-form">
        <h3 className="mb-4 billing-heading">Billing Details</h3>
        <div className="row align-items-end">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstname">Firt Name</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="country">Town / City</label>
              <div className="select-wrap">
                <div className="icon">
                  <span className="ion-ios-arrow-down"></span>
                </div>
                <select name="" id="" className="form-control">
                  <option value="">Munich</option>
                  <option value="">Berlin</option>
                  <option value="">Hamburg</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="streetaddress">Street Address</label>
              <input type="text" className="form-control" placeholder="House and street" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Appartment, suite, unit" />
            </div>
          </div>
          <div className="w-100"></div>
          <div className="w-100"></div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="emailaddress">Email Address</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="w-100"></div>
        </div>
      </form>
    </div>
  );
}
