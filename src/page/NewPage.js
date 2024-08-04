import React, { useRef, useState } from "react";
import Item from "../components/postList/Item";
import Header from "../common/Header";
import { TbZoom } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import CustomCalendar from "../components/auth/CustomCalendar"; // 경로를 적절하게 수정하세요
// import data from "../data/cate-data.json"; // 데이터 파일 import
import Footer from "../common/Footer";
import { data } from "../components/mian/airbnb";

const Searchbarform = styled.form`
  top: 30px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  margin: auto;
  border-radius: 32px;
  height: 66px;
  width: 820px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08);
`;
const AccommodationList = styled.div`
  margin-top: 50px;
  height: 800px;
  display: block;
`;
const CityInput = styled.input`
  margin-right: 2px;
  border-radius: 32px;
  border: none;
  text-align: center;
  flex: 1;
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
  margin-left: 10px;
  border: none;
`;
const DateSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const PersonInput = styled.input`
  margin-right: 2px;
  border-radius: 32px;
  border: none;
  text-align: center;
  width: 80px;
`;
const Label = styled.span`
  margin-left: 5px;
  margin: auto;
`;

function NewPage() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  // const [roomGuests, setRoomGuests] = useState(1);
  const [cityName, setCityName] = useState("");
  // const [filteredItems, setFilteredItems] = useState([]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("/api/search", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         cityName,
  //         checkInDate,
  //         checkOutDate,
  //         roomGuests,
  //       }),
  //     });
  //     const result = await response.json();
  //     setFilteredItems(result);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  const [items, setItems] = useState();

  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const fetchAirbnb = (e) => {
    e.preventDefault();
    setItems(data);
    console.log(data);
  };
  return (
    <>
      <Header />
      <div>
        <Searchbarform onSubmit={fetchAirbnb}>
          <CityInput
            type="text"
            placeholder="영어로 도시 입력"
            value={cityName}
            ref={ref}
          />
          <CustomCalendar
            ref={ref2}
            onChange={setCheckInDate}
            value={checkInDate}
            placeholder="체크인"
          />
          <CustomCalendar
            ref={ref3}
            onChange={setCheckOutDate}
            value={checkOutDate}
            placeholder="체크아웃"
          />
          <span style={{ margin: "auto" }}>객실인원</span>
          <PersonInput
            type="number"
            min="1"
            // value={roomGuests}
            // onChange={(e) => setRoomGuests(e.target.value)}
          />
          <Label>명</Label>
          <SearchButton type="submit">
            <TbZoom />
          </SearchButton>
        </Searchbarform>
      </div>
      <div style={{ height: "1000px" }}>
        <AccommodationList>{items && <Item items={items} />}</AccommodationList>
      </div>
      <Footer />
    </>
  );
}

export default NewPage;
