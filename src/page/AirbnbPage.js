import React, { useRef, useState } from "react";
import Item from "../components/postList/Item";
import Header from "../common/Header";
import { TbZoom } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { data } from "../components/mian/airbnb";

const Searchbarform = styled.form`
  top: 30px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin: auto;
  border-radius: 32px;
  height: 66px;
  width: 700px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
`;
const AccommodationList = styled.div`
  margin-top: 50px;
  display: block;
`;
const CityInput = styled.input`
  margin-right: 2px;
  border-radius: 32px;
  border: none;
  text-align: center;
`;
const SearchButton = styled.button`
  padding: 16px;
  position: relative;
  margin: auto;
  color: white;
  width: 50px;
  cursor: pointer;
  display: inline-block;
  background-color: #ff007f;
  border-radius: 50%;
  margin-left: 80px;
  border: none;
`;
const ChecInput = styled.input`
  margin-right: 2px;
  border-radius: 32px;
  cursor: pointer;
  height: 66px;
  border: none;
  text-align: center;
`;

function AirbnbPage() {
  const [items, setItems] = useState();

  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const fetchAirbnb = (e) => {
    e.preventDefault();
    setItems(data);
    console.log(data);
  };

  // const API_KEY = "07d4ed62d1mshefab5b224a1aea4p1ada03jsn191c1f72699b";
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": API_KEY,
  //     "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
  //   },
  // };

  // const fetchAirbnb = async (e) => {
  //   e.preventDefault();
  //   console.log("city", ref.current.value);
  //   console.log("checkin", ref2.current.value);
  //   console.log("checkout", ref3.current.value);
  // console.log("totalRecords", ref2.current.value);
  // console.log("currency", ref3.current.value);
  // console.log("adults", ref4.current.value);

  // const city = ref.current.value;
  // const checkin = ref2.current.value;
  // const checkout = ref3.current.value;
  // const totalRecords = ref2.current.value;
  // const currency = ref3.current.value;
  // const adults = ref4.current.value;

  // const url = `https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByLocationV2?location=${city}&checkin=${checkin}&checkout=${checkout}`;

  //   try {
  //     const response = await fetch(url, options);
  //     if (!response.ok) {
  //       throw new Error("Fail to fetch airbnb data");
  //     }
  //     const result = await response.json();
  //     console.log(result.data.list);
  //     setItems(result.data.list);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <>
      <Header />
      <div>
        <Searchbarform onSubmit={fetchAirbnb}>
          <CityInput type="text" placeholder="영어로 도시 입력" ref={ref} />
          <p>
            체크인
            <ChecInput type="date" ref={ref2} />
            체크아웃
            <ChecInput type="date" ref={ref3} />
          </p>
          <SearchButton>
            <TbZoom />
          </SearchButton>
        </Searchbarform>
      </div>
      {/* {items && items.map((item) => <Item item={item} />)} */}
      <AccommodationList>{items && <Item items={items} />}</AccommodationList>
      {/* &&조건부 렌더링 */}
    </>
  );
}

export default AirbnbPage;
