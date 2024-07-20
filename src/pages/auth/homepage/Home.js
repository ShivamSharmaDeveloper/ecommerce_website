import React, { useRef, useState } from "react";
import "./Home.css";
import Header from "../../../components/header";
import CarouselComponent from "../../../components/carousel/Carousel";
import ProductCard from "../../../components/productCard/ProductCard";
import { ReactComponent as LeftArrow } from "../../../assets/icons/arrowLeft.svg";
import { ReactComponent as RightArrow } from "../../../assets/icons/arrowRight.svg";
import CountdownTimer from "../../../components/timer/Timer";
import { mockData } from "../../../mock";
import ShoeCard from "../../../components/shoeBanner/ShoeBanner";
import ShoeBanner from "../../../assets/images/ShoeBanner.png";
import ShoeBanner2 from "../../../components/shoeBanner/ShoeBanner2";
import DemoImage1 from '../../../assets/images/DemoImage1.png'
import DemoImage2 from '../../../assets/images/DemoImage2.png'
import { ReactComponent as Delivery } from "../../../assets/icons/delivery.svg";
import { ReactComponent as CustomerCare } from "../../../assets/icons/customer.svg";
import { ReactComponent as Gurantee } from "../../../assets/icons/shield-tick.svg";



const Homepage = () => {
  const endDate = "2024-12-31T23:59:59";
  const scrollContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Mens");

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -120, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 120, behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <CarouselComponent />
        </div>
        <div className="saleContainer">
          <div className="todaySaleContainer">
            <div className="edgeBar"></div>
            <p className="saleText">Today's Sale</p>
          </div>

          <div className="saleInfo">
            <div>
              <span className="flashSale">Flash Sales</span>
            </div>
            <div className="timerContainer">
              <CountdownTimer endDate={endDate} />
            </div>
            <div className="scrollControlContainer">
              <button className="button" onClick={scrollLeft}>
                <LeftArrow className="icon" />
              </button>
              <button className="button" onClick={scrollRight}>
                <RightArrow className="icon" />
              </button>
            </div>
          </div>
          <div className="horizontalScrollContainer" ref={scrollContainerRef}>
            <ProductCard data={mockData} />
          </div>
          <div className="viewProduct">
            <div className="google-sign-button">
              <p className="google-button-text">{"Sign up with Google"}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="trendingSaleContainer">
            <div className="trendingHeader">
              <div className="edgeBar"></div>
              <p className="saleText">{"Trending products"}</p>
            </div>

            <div className="scrollControlContainer">
              <button className="button" onClick={scrollLeft}>
                <LeftArrow className="icon" />
              </button>
              <button className="button" onClick={scrollRight}>
                <RightArrow className="icon" />
              </button>
            </div>
          </div>
          {/* tab switch */}
          <div>
            <div className="tabSwitcher">
              <div
                className={`tab ${activeTab === "Mens" ? "active" : ""}`}
                onClick={() => setActiveTab("Mens")}
              >
                <span className="category"> {" Mens"}</span>
              </div>
              <div
                className={`tab ${activeTab === "Women" ? "active" : ""}`}
                onClick={() => setActiveTab("Women")}
              >
                <span className="category"> {" Womens"}</span>
              </div>
            </div>
            <div>
              <div
                className="horizontalScrollContainer"
                ref={scrollContainerRef}
              >
                <ProductCard data={mockData} />
              </div>
              <div className="viewProduct">
                <div className="google-sign-button">
                  <p className="google-button-text">{"View All Products"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel2 */}
          <div>
            <CarouselComponent />
          </div>

          {/* tabswitch2 */}

          <div className="trending">
            <div className="trendingScrollContainer">
              <div className="trendingProductHeader">
                <div className="edgeBar"></div>
                <p className="saleText">{"Explore our products"}</p>
              </div>
              <div className="scrollControlContainer">
                <button className="button" onClick={scrollLeft}>
                  <LeftArrow className="icon" />
                </button>
                <button className="button" onClick={scrollRight}>
                  <RightArrow className="icon" />
                </button>
              </div>
            </div>
            <div>
              <div
                className="horizontalScrollContainer"
                ref={scrollContainerRef}
              >
                <div className="trendingProduct">
                  <ProductCard data={mockData} />
                  <ProductCard data={mockData} />
                </div>
              </div>
              <div className="viewProduct">
                <div className="google-sign-button">
                  <p className="google-button-text">{"View All Products"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* explore our products */}

          <div className="exploreProductContainer">
            <div className="trendingScrollContainer">
              <div className="trendingProductHeader">
                <div className="edgeBar"></div>
                <p className="saleText">{"Explore our products"}</p>
              </div>
              <div className="scrollControlContainer">
                <button className="button" onClick={scrollLeft}>
                  <LeftArrow className="icon" />
                </button>
                <button className="button" onClick={scrollRight}>
                  <RightArrow className="icon" />
                </button>
              </div>
            </div>
            <div></div>

            <div className="shoeBannerContainer" >
              <div className="shoeBannerMain" >
                <ShoeCard
                  imageUrl={ShoeBanner}
                  name="Shoes Name"
                  description="About the shoe"
                  currentPrice="699"
                  originalPrice="1999"
                />
              </div>
              <div className="shoeBanner2" >
            <ShoeBanner2/>
            <div className="shoeImages" >
            <img src={DemoImage2} height={400} />

                <img src={DemoImage1} height={400} />
            </div>
          <div>
          </div>
              </div>
            </div>
            <div>

            </div>
          </div>

          {/* delivery */}

          <div className="customerInfoContainer" >
                <div className="deliveryContainer" >
                <div className="outerCircle" >
                        <div className="innerCircle" >
                            <Delivery/>
                        </div> 
                </div>
                <div>
                    <p className="deliveryHeading" >{'FREE AND FAST DELIVERY'}</p>
                    <p className="deliveryInfo">{'Free delivery for all orders over $140'}</p>
                </div>
                </div>
                <div className="deliveryContainer" >
                <div className="outerCircle" >
                        <div className="innerCircle" >
                            <CustomerCare/>
                        </div> 
                </div>
                <div>
                    <p className="deliveryHeading" >{'FREE AND FAST DELIVERY'}</p>
                    <p className="deliveryInfo">{'Free delivery for all orders over $140'}</p>
                </div>
                </div>
                <div className="deliveryContainer" >
                <div className="outerCircle" >
                        <div className="innerCircle" >
                            <Gurantee/>
                        </div> 
                </div>
                <div>
                    <p className="deliveryHeading" >{'FREE AND FAST DELIVERY'}</p>
                    <p className="deliveryInfo">{'Free delivery for all orders over $140'}</p>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
