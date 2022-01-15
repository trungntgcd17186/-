import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from "../../../src/img/slider1.jpeg";
import slider2 from "../../../src/img/slider2.jpeg";
import slider3 from "../../../src/img/slider3.jpeg";
import slider4 from "../../../src/img/slider4.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src={slider3}
              style={{
                width: "420px",
                height: "237px",
                borderRadius: "12px",
              }}
            />
          </div>
          <div>
            <img
              src={slider2}
              style={{
                width: "420px",
                height: "237px",
                borderRadius: "12px",
              }}
            />
          </div>
          <div>
            <img
              src={slider1}
              style={{
                width: "420px",
                height: "237px",
                borderRadius: "12px",
              }}
            />
          </div>
          <div>
            <img
              src={slider4}
              style={{
                width: "420px",
                height: "237px",
                borderRadius: "12px",
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
