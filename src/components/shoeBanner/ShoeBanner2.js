import React from 'react';
import { Button } from '@mui/material';
import styles from './ShoeBanner.module.css';
import { defer } from 'react-router-dom';
import ShoeBannerImage from '../../assets/images/ShoeBanner3.png'

const ShoeBanner2 = () => {
  return (
    <div className={styles.card}>
      
      <div className={styles.content}>
        <h2 className={styles.title}>shoes name</h2>
        <p className={styles.subtitle}>About the shoe</p>
        <div>
          <span className={styles.price}>₹699</span>
          <span className={styles.oldPrice}>₹1999</span>
        </div>
        <Button className={styles.button}>Shop Now</Button>
      </div>
      <div className={styles.image}>
        <img src={ShoeBannerImage} alt="Shoes" width="100%" />
      </div>
    </div>
  );
};

export default ShoeBanner2;
