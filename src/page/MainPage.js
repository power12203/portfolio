import React from "react";

import styled from "styled-components";

import CardList from "../components/mian/CardList"
import "../App.css";
import Header from "../common/Header";
import Slide from "../components/mian/Slide"
import { Routes, Route } from "react-router-dom";
import Iodging from "../components/mian/Iodging";

const Headers = styled.header`
  background-color: white;
  overflow: hidden;
`;

const Div1 = styled.div`
  width: 1080px;
  margin: 0 auto;
  overflow: hidden;
  height: 600px;
  z-index: 1;
`;
const Div2 = styled.div`
  width: 1055px;
  margin: 0 auto;
  margin-top: 50px;
  overflow: hidden;
  z-index: 1;
`;
const Text = styled.div`
  opacity: initial;
  width: 100%;
  background-image: url(./imge/배경.gif);
  background-size: cover;

  /* position: absolute; */
`;
const Text2 = styled.div`
  width: 100%;
  background-image: url(./imge/뒷배경3.jpg);
  background-size: cover;

  transition: all 1s ease-out;
  opacity: 1;
`;
function MainPage() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Headers>
              <Header/>
              <Text2>
                <Text>
                  <Div2>
                    <CardList />
                  </Div2>
                  <Div1>
                    <Slide />
                  </Div1>
                </Text>
              </Text2>
            </Headers>
          }
        />
        <Route path="/숙소" element={<Iodging />} />
      </Routes>
    </>
  );
}

export default MainPage;