import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';
import bannerImage from '../../assets/images/Banner.png';

const CarouselComponent = () => {
  return (  
    <div className={styles.carouselWrapper}>
      <Carousel 
        autoPlay 
        interval={1500} 
        infiniteLoop 
        showArrows 
        showThumbs={false} 
        showStatus={false}
      >
        <div>
          <img src={bannerImage} alt="Slide 1" />
        </div>
        <div>
          <img src={bannerImage} alt="Slide 2" />
        </div>
        <div>
          <img src={bannerImage} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;