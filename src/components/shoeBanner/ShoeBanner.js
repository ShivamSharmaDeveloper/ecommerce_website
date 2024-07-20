import React from "react";
import "./ShoeBanner.css";

const ShoeCard = ({ imageUrl,height, name, description, currentPrice, originalPrice }) => {
  return (
    <div className="shoeCard" style={{ height:height }} >
      <img src={imageUrl} alt={name} className="shoeImage" />
      <div className="infoContainer">
        <h2 className="shoeName">{name}</h2>
        <p className="shoeDescription">{description}</p>
        <div className="priceContainer">
          <span className="currentPrice">₹{currentPrice}</span>
          <span className="originalPrice">₹{originalPrice}</span>
        </div>
        <button className="shopNowButton">Shop Now</button>
      </div>
    </div>
  );
};

export default ShoeCard;
