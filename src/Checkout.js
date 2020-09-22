import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";

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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
