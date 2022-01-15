import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from "../../img/noibatslide1.png";
import slide2 from "../../img/noibatslide2.png";
export default class ProductHightlight extends Component {
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
      arrows: false,
    };
    return (
      <div>
        <Slider
          {...settings}
          style={{
            width: "100%",
            height: "347px",
          }}
        >
          <div>
            <img
              src={slide1}
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
        </Slider>
      </div>
    );
  }
}
