import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styled from "styled-components";

const Headd = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 10px auto;
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  color: black;
`;
const Direction = styled.div`
  width: 50px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ArrowLeft = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer; //커서 그래핑
  background-color: #f8b240;
  background-size: cover;
  border-radius: 50%;
  opacity: ${(props) => props.left};
  z-index: 1;
  &:hover {
    transition: transform 0.5s;
    transform: translateX(${(props) => props.leftMoveX}px);
  }
`;
const ArrowRight = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: #f8b240;
  background-size: cover;
  border-radius: 50%;
  opacity: ${(props) => props.right};
  z-index: 1;
  &:hover {
    transition: transform 0.5s;
    transform: translateX(${(props) => props.rightMoveX}px);
  }
`;
const LeftBtn = styled(SlArrowLeft)`
  padding: 2px 0px;
  width: 80%;
  height: 80%;
  z-index: 3;
`;
const RightBtn = styled(SlArrowRight)`
  padding: 2px 3px;
  width: 80%;
  height: 80%;
  z-index: 3;
`;

function Head(props) {
  const { left, right, leftMoveX, rightMoveX, handleSetMoveX } = props;
  const onclick = (direction) => {
    console.log(direction);
    handleSetMoveX(direction);
  };
  return (
    <Headd>
      <Title>일본 오사카</Title>
      <Direction>
        <ArrowLeft
          left={left}
          leftMoveX={leftMoveX}
          onClick={() => onclick("left")}
        >
          <LeftBtn color="black" />
        </ArrowLeft>
        <ArrowRight
          right={right}
          rightMoveX={rightMoveX}
          onClick={() => onclick("right")}
        >
          <RightBtn color="black" />
        </ArrowRight>
      </Direction>
    </Headd>
  );
}

export default Head;
