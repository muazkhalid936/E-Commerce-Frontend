import React, { useContext } from "react";
import "./Cartitem.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../context/ShopContext";

const Cartitem = () => {
  const { getTotalAmount, all_product, cartItem, addToCart, removeFromCart } =
    useContext(ShopContext);
  console.log(cartItem, "as");
  return (
    <div className="cartitem">
      <hr></hr>
      <b>
        <div className="cart-item-main">
          {" "}
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </b>

      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="cart-format">
                <img src={e.image} className="cart-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-quantity">{cartItem[e.id]}</button>
                <p>{e.new_price * cartItem[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  className="cart-remove"
                />
              </div>

              <hr />
            </div>
          );
        }
      })}

      <div className="cart-billing">
        <div className="cart-down">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-totals">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-totals">
              <p>Shipping Fee</p>
              <p>Free Shipping</p>
            </div>
            <hr />
            <div className="cart-totals">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button className="cart-proceed">
            <b>Proceed TO Checkouts</b>
          </button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promo">
            <input type="text" placeholder="Promo Code" />{" "}
            <button className="promo-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
