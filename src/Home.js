import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Watches/GW/unrec/Sept/GW_PC_BUNK_watches1500x600._CB405140901_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product />
        <Product />
      </div>
      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home__row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
