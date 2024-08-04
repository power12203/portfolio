import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const Slidebox = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px auto;
  margin-top: 5px;
  .slick-dots {
    color: white;
    position: absolute;
    bottom: 30px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 10px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.5;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
`;

const images = require.context("../../img", false, /\.(png|jpe?g|svg)$/);
const keys = images.keys(); // filename

const imgList = keys.map((key) => images(key));
// console.log(imgList);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Adjust as needed
};
const Img = styled.img`
  width: 100%;
  height: 800px;
  /* border: 1px solid #000; */
  display: block;
  margin-left: 0;
`;
const Slide = () => {
  return (
    <Slidebox className="main side">
      <Slider {...settings}>
        {imgList.map((img) => (
          <div>
            <Img src={img} alt="" />
          </div>
        ))}
      </Slider>
    </Slidebox>
  );
};

export default Slide;
