import React, { useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import styles from "./ProductCard.module.css";
import shoeImage from "../../assets/images/Shoe.png";
import { ReactComponent as Star } from "../../assets/icons/Star.svg";

const ProductCard = ({ data }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className={styles.horizontalList}>
      {data.map((item, index) => (
        <div key={index} className={styles.cardContainer}>
          <div className={styles.card} style={{ backgroundColor: "#F5F5F5" }}>
            <div className={styles.discount}>{`-${item?.discount}%`}</div>
            <img src={shoeImage} alt="Shoe" className={styles.shoeImage} />
            <div className={styles.icons}>
              <div className={styles.iconContainer}>
                <FaHeart
                  height={24}
                  width={24}
                  className={
                    favorites.includes(item.id) ? styles.heartRed : styles.heart
                  }
                  onClick={() => toggleFavorite(item.id)}
                />
              </div>
              <div className={styles.iconContainer}>
                <FaEye className={styles.eye} height={24} width={24} />
              </div>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.left}>
              <span className={styles.shoeName}>{item?.name}</span>
              <div className={styles.prices}>
                <span className={styles.currentPrice}>
                  {item?.currentPrice}
                </span>
                <span className={styles.originalPrice}>
                  {item?.originalPrice}
                </span>
              </div>
            </div>
            <div className={styles.right}>
              <div>
                <span className={styles.rating}>{item?.rating}</span>
                <Star className={styles.star} />
                <span className={styles.reviews}>{`(${item?.reviews})`}</span>
              </div>
              <div>
                <p>{"    "}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
