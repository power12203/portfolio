import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const Slidebox = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px auto;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  .slick-dots {
    color: white;
    position: absolute;
    bottom: 30px;
    display: flex;
    justify-content: flex-end;
    float: right;
    flex-direction: row;
    width: 100%;
    height: 650px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: right;
  }
  .slick-dots li {
    position: relative;
    display: block;
    width: 300px;
    height: 100px;
    margin: 0 5px;
    margin-left: 50px;
    padding: 0;
    cursor: pointer;
    text-align: center;
  }

  .slick-dots li button:before {
    font-family: "slick";
    font-size: 35px;
    line-height: 1;
    display: block;
    width: fit-content;
    height: 20px;
    content: "•";
    text-align: right;
    opacity: 1.5;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: auto;
    font-weight: 700;
    text-shadow: 0 0 10px #fff;
    &:hover {
      color: black;
    }
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black;
  }
  .slick-dots li:nth-child(1) button:before {
    content: "도톤보리";
  }
  .slick-dots li:nth-child(2) button:before {
    content: "유니버셜 스튜디오";
  }
  .slick-dots li:nth-child(3) button:before {
    content: "오사카성";
  }
  .slick-dots li:nth-child(4) button:before {
    content: "해유관";
  }
  .slick-dots li:nth-child(5) button:before {
    content: "교토";
  }
  .slick-dots li:nth-child(6) button:before {
    content: "아니마 온센";
  }
`;

const images = require.context("../../imag", false, /\.(png|jpe?g|svg)$/);
const keys = images.keys(); // filename

const imgList = keys.map((key) => images(key));
// console.log(imgList);

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: "linear",
  slidesToShow: 1,
  appendDots: (dots) => (
    <div
      style={{
        backgroundColor: "tranaparent",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000, // Adjust as needed
};
const Img = styled.img`
  width: 100%;
  height: 800px;
  /* border: 1px solid #000; */
  display: block;
  margin-left: 0;
`;
const SlickDot = styled.div``;
const RegionList = () => {
  return (
    <Slidebox className="main side">
      <Slider {...settings}>
        {imgList.map((img) => (
          <div>
            <Img src={img} alt="" />
          </div>
        ))}
      </Slider>
      <SlickDot className="slickDbox"></SlickDot>
    </Slidebox>
  );
};

export default RegionList;
