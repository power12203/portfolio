import React, { useCallback, useState } from "react";
import "./Iodgings.css";

const images = require.context("../../img", false, /\.(png|jpe?g|svg)$/);
const keys = images.keys(); // filename

const imgList = keys.map((key) => images(key));

const IodgingList = ({ totalItems, itemPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(totalItems / itemPerPage);
  const pageNumbers = Array.from({ length: totalPage }, (_, idx) => idx + 1);
  const handleClick = useCallback(
    (page) => {
      setCurrentPage(page);
    },
    [currentPage]
  );
  const startIdx = (currentPage - 1) * itemPerPage;
  const endIdx = startIdx + itemPerPage;
  // const displayItems = Array.from({ length: totalItems }, (_, idx) => idx + 1)
  const displayItems = imgList.slice(startIdx, endIdx).map((item, idx) => (
    <div key={idx} className="item">
      <img src={item} />
    </div>
  ));
  return (
    <div className="Pagination-container">
      <div className="items">{displayItems}</div>
      <ul className="page-numbers">
        {pageNumbers.map((num) => (
          <li
            key={num}
            className={num === currentPage ? "active" : ""}
            onClick={() => handleClick(num)}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default IodgingList;
