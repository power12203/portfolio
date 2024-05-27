import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px 10px 0px 0px;
  display: block;
  margin-left: 0px;
  margin-top: 0;
`;
const Div1 = styled.div`
  background-color: white;
  cursor: pointer;
  width: 250px;
  margin-right: 15px;
  box-shadow: 10px 10px 10px -5px rgba(25, 42, 70, 0.2);
  transition: all 0.5s ease-in-out;
  flex-shrink: 0;
  /* border: 1px solid #000; */
  height: 350px;
  border-radius: 10px;
`;
const Div2 = styled.div`
  opacity: 1;
  width: 80%;
  padding-left: 0rem;
  padding-top: 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const Title = styled.div`
  font-size: 0.9rem;
  color: #949393;
`;
const Rating = styled.div`
  font-size: 0.9rem;
  color: #fff;
  background-color: #f8ba67;
  padding: 0.2rem;
  margin-left: 0.5rem;
`;
const Explanation = styled.div`
  font-weight: bold;
  color: #545e6f;
`;

const Card = ({ img }) => {
  return (
    <Div1>
      <Img src={img.color} width="50px" alt="" />
      <Link style={{ textDecoration: "none" }}>
        <Div2>
          <Title>{img.title}</Title>
          <Rating>{img.rating}</Rating>
        </Div2>
        <Explanation>{img.explanation}</Explanation>
        <StarRating />
      </Link>
    </Div1>
  );
};

export default Card;
