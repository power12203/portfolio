import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import tnrth from "../../cityImage/62c9fe6b0c60bb410d6e4ac35d49d37d.webp";
// import tnrth2 from "../../cityImage/City-guides_Osaka_7-best-budget-hotels_Sotetsu-Fresa-Inn-Osaka-Yodoyabashi1.jpg";
// import tnrth3 from "../../cityImage/e7d0a7480de494b6b40eb4098197fb50.webp";

const Img = styled.img`
  height: 250px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  margin-left: -0px;
  z-index: 10;
`;

const CardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
  .slick-prev,
  .slick-next {
    position: absolute; /* 버튼을 절대 위치로 설정 */
    top: 50%; /* 세로로 가운데 정렬 */
    transform: translateY(-50%); /* 세로 정렬을 위해 Y 축으로 이동 */
    background: none; /* 배경 제거 */
    border: none; /* 테두리 제거 */
    cursor: pointer; /* 마우스 커서 포인터로 변경 */
    z-index: 1000; /* z-index 설정 */
    width: 40px; /* 버튼 너비 조정 */
    height: 40px; /* 버튼 높이 조정 */
  }

  .slick-prev {
    left: 10px; /* 왼쪽 버튼 위치 조정 */
  }

  .slick-next {
    right: 10px; /* 오른쪽 버튼 위치 조정 */
  }

  .slick-prev:before,
  .slick-next:before {
    position: relative;
    font-family: "slick";
    line-height: 1;
    font-size: 40px;
    opacity: 0;
    transition: opacity 0.5s linear;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    opacity: 1;
    color: white;
  }
  .card {
    border: none;
  }
  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 300px;
  }
  .slick-dots {
    position: absolute;
    bottom: 0px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
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
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    user-select: none;
    height: 250px;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
`;

const Card = styled.div`
  width: 19rem;
  height: auto;
  margin-left: 20px;
`;

function Item({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
  };
  const Cardbody = styled.div`
    height: 200px;
    p {
      font-size: 15px;
      height: 1px;
    }
  `;
  const Pdiv = styled.div`
    height: 10px;
    p {
      /* position: absolute; */
      margin-top: -60px;
      margin-left: 10px;
      color: white;
      text-shadow: 0 0 10px #fff;
    }
  `;
  return (
    <CardDiv>
      {items.data.list.map((item, index) => (
        <Card className="card" key={index}>
          <Slider {...settings}>
            {item.listing.contextualPictures.map((picture, picIndex) => (
              <div key={picIndex}>
                <Img
                  src={picture.picture}
                  alt={
                    picture.caption
                      ? picture.caption.messages.join(", ")
                      : "Image"
                  }
                />
                {picture.caption && (
                  <Pdiv>
                    {picture.caption.messages.map((message, msgIndex) => (
                      <p key={msgIndex}>{message}</p>
                    ))}
                  </Pdiv>
                )}
              </div>
            ))}
          </Slider>
          <Cardbody className="card-body">
            <h5 className="card-title">{item.listing.name}</h5>
            <p className="card-text">City: {item.listing.city}</p>
            <p className="card-text">
              Average Rating: {item.listing.avgRatingLocalized}
            </p>
            <p className="card-text">
              Total:{" "}
              {item.pricingQuote.structuredStayDisplayPrice.primaryLine.price}
            </p>
            <div>
              {item.pricingQuote.structuredStayDisplayPrice.explanationData.priceDetails[0].items.map(
                (detail, detailIndex) => (
                  <p key={detailIndex} className="card-text">
                    {detail.description}: {detail.priceString}
                  </p>
                )
              )}
            </div>
          </Cardbody>
        </Card>
      ))}
    </CardDiv>
  );
}

export default Item;
