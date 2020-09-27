import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        ></img>
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text"></input>

          <h5>Password</h5>
          <input type="password"></input>

          <button className="login__signInButton">Sign In</button>
        </form>

        <p>
          By Signing-in you agree to the Amazon Clone's conditions of Use &
          Sale. Please see our privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>

        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
