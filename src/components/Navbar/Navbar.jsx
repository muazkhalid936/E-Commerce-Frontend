"use clients";
import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_logo from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} />
        <p>Shopper</p>
      </div>

      <ul className="nav-list">
        <li onClick={() => setMenu("shop")}>
          <Link className="link" to={"/"}>
            Shop{" "}
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link className="link" to={"/Men"}>
            {" "}
            Men
          </Link>{" "}
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link className="link" to={"/Women"}>
            {" "}
            Women
          </Link>{" "}
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link className="link " to={"/kids"}>
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login">
        <Link to={"/LoginSignup"}>
          {" "}
          <button>Login</button>
        </Link>
        <Link to={"/Cart"}>
          {" "}
          <img src={cart_logo} />
        </Link>
        <div className="counter">0</div>
      </div>
    </div>
  );
};

export default Navbar;
