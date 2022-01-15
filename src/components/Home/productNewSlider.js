import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../img/img1.png";
import slide2 from "../../img/slide2.png";
import slide3 from "../../img/slide3.png";
import "./slider.css";

export default class ProductNewSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
      // fade: true,
      arrows: false,
    };
    return (
      <div>
        <Slider
          {...settings}
          style={{
            width: "100%",
            height: "347px",
            borderRadius: "12px",
          }}
        >
          <div>
            <img
              src={img1}
              alt="slide"
              style={{
                width: "100%",
                height: "347px",
              }}
            />
          </div>
          <div>
            <img
              src={slide2}
              alt="slide"
              style={{
                width: "100%",
                height: "347px",
              }}
            />
          </div>
          <div>
            <img
              src={slide3}
              alt="slide"
              style={{
                width: "100%",
                height: "347px",
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
