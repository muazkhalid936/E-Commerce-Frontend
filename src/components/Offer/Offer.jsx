import React from "react";
import "./Offer.css";
import img from "../Assets/exclusive_image.png";
const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Chect Now</button>
      </div>

      <div className="offer-right">
        <img src={img} />
      </div>
    </div>
  );
};

export default Offer;
