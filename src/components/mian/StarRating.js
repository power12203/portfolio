import React from "react";
import Star from "./Star";
import { useState } from "react";

const creatArray = (length) => [...Array(length)];

export default function StarRating({ totalStars = 5, handleRat = (f) => f }) {
  const [selectedStars, setselectedStars] = useState(3);
  const onclick = (idx) => {
    console.log(idx);
    setselectedStars(idx);
    handleRat(idx);
  };

  return (
    <>
      {creatArray(totalStars).map((_, idx) => (
        <Star
          key={idx}
          selected={selectedStars > idx - 1}
          onclick={() => onclick(idx)}
        />
      ))}
      {/* <p>{selectedStars / totalStars}</p> */}
    </>
  );
}
