
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div style={{margin: '10px'}}>

        <Slider {...settings}>
        
    <div className="slide">
        <img src="https://img.freepik.com/premium-vector/fashion-shopping-online-mobile_257571-18.jpg?w=2000" alt=""/>
        
    </div>
    <div className="slide">
        <img src="https://img.freepik.com/free-vector/shopping-time-banner-with-realistic-map-cart-gift-bags-vector-illustration_548887-120.jpg" alt=""/>
        
    </div>
    <div className="slide">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt=""/>
        
    </div>
    <div className="slide">
        <img src="https://previews.123rf.com/images/arrow/arrow1508/arrow150800011/43834601-online-shopping-e-commerce-flat-design-concept-banner-background.jpg" alt=""/>
        
    </div>
    
   
        </Slider>
      </div>
    );
  }
}
