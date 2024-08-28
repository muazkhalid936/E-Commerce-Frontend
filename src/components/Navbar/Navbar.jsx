"use client";
import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_logo from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { IoMenu, IoClose } from "../../../node_modules/react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { getTotalCartItem } = useContext(ShopContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="Navbar">
        <div className="nav-logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <a href="/">
            <p className="shopper">Shopper</p>
          </a>
        </div>
        <ul className="nav-list">
          <li onClick={() => setMenu("shop")}>
            <Link className="link" to={"/"}>
              Shop
            </Link>
            {menu === "shop" && <hr />}
          </li>
          <li onClick={() => setMenu("men")}>
            <Link className="link" to={"/Men"}>
              Men
            </Link>
            {menu === "men" && <hr />}
          </li>
          <li onClick={() => setMenu("women")}>
            <Link className="link" to={"/Women"}>
              Women
            </Link>
            {menu === "women" && <hr />}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link className="link" to={"/kids"}>
              Kids
            </Link>
            {menu === "kids" && <hr />}
          </li>
        </ul>

        <div className="nav-login">
          <Link to={"/LoginSignup"}>
            <button className="nav-login-btn">Login</button>
          </Link>
          <Link to={"/Cart"}>
            <img src={cart_logo} className="cart" alt="Cart" />
          </Link>
          <div className="counter">{getTotalCartItem()}</div>
          {/* Menu icon for mobile */}
          <div>
            <IoMenu className="menu-icon" size={24} onClick={toggleSidebar} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <IoClose size={24} onClick={closeSidebar} className="close-icon" />
        </div>
        <ul className="sidebar-list">
          <li
            onClick={() => {
              setMenu("shop");
              closeSidebar();
            }}
          >
            <Link className="link" to={"/"}>
              Shop
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("men");
              closeSidebar();
            }}
          >
            <Link className="link" to={"/Men"}>
              Men
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("women");
              closeSidebar();
            }}
          >
            <Link className="link" to={"/Women"}>
              Women
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("kids");
              closeSidebar();
            }}
          >
            <Link className="link" to={"/kids"}>
              Kids
            </Link>
          </li>
          <li
            onClick={() => {
              closeSidebar();
            }}
          >
            {" "}
            <Link className="link" to={"/LoginSignup"}>
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Navbar;
