import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import CardList from "../components/mian/CardList";
import "../App.css";
import Header from "../common/Header";
import Slide from "../components/mian/Slide";
import Iodging from "../components/mian/Iodging";
import RegionList from "../components/mian/RegionList";
import Footer from "../common/Footer";

const Mains = styled.header`
  background-color: white;
  /* overflow: hidden; */
`;

const Div1 = styled.div`
  width: 1060px;
  margin: 0 auto;
  /* overflow: hidden; */
  height: 600px;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;
const Div2 = styled.div`
  width: 100%;
  /* overflow: hidden; */
  z-index: 1;
`;
const Text = styled.div`
  opacity: initial;
  width: 100%;
  height: 100%;
  /* background-image: url(../../../image/뒷배경.jsp); */
  /* background-size: cover; */

  /* position: absolute; */
  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;
const Text2 = styled.div`
  width: 100%;
  /* background-image: url(./imge/뒷배경3.jpg); */
  /* background-size: cover; */

  transition: all 1s ease-out;
  opacity: 1;
`;

function MainPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/숙소" element={<Iodging />} />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <Mains>
              <Text2>
                <Text>
                  <Div2>
                    <Slide />
                  </Div2>
                  <Div1>
                    <CardList />
                  </Div1>
                  <Div2>
                    <RegionList />
                  </Div2>
                </Text>
              </Text2>
            </Mains>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default MainPage;
