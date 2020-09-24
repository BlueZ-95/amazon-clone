import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Mathey-Tissot Analog Grey Dial Men's Watch-H1886QPS"
          price={23600}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71R5eeQlvHL._UL1440_.jpg"
        />
        <Product
          id="2"
          title="Mathey-Tissot Analog Black Dial Men's Watch-H900ALN"
          price={11600}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61Fl4Drk33L._UL1440_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="realme X (Space Blue, 4GB RAM, 128GB Storage)"
          price={10900}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81hcorK3VuL._SL1500_.jpg"
        />
        <Product
          id="4"
          title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
          price={54999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"
        />
        <Product
          id="5"
          title="OnePlus 7T Pro (Haze Blue, 8GB RAM, Fluid AMOLED Display)"
          price={43999}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61FRLa8IFTL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop (8GB/1TB HDD/M.2 Slot/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-dk0264TX"
          price={64990}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
