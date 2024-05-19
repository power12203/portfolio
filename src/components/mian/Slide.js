import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const Slidebox = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px auto;
  margin-top: 100px;
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
  height: 450px;
  /* border: 1px solid #000; */
  display: block;
  margin-left: 0;
`;
const Slide = () => {
  return (
    <Slidebox>
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
