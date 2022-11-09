import React from "react";
import Slider from "react-slick";
import "./slider.scss";
import data from "../Home/data";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slide">
      {
        data.map((item) => {
          return (
            <div>
            <img src={item.bg} />
            <h2>{item.Place}</h2>
           </div>
          )
        })
      }
    </Slider>
  );
}