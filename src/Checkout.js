import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checout__left">
        <img
          className="checkout__ad"
          src="https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-3.png"
          alt=""
        />

        <div className="checkout__title">
          <h2>Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checout__right">
        <h2>Your Subtotal</h2>
      </div>
    </div>
  );
}

export default Checkout;
