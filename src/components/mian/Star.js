import React from 'react';
import {FaStar} from "react-icons/fa"

export default function Star (props) {

    const {selected, onclick=f=>f} = props;

    return (
        <FaStar 
        color={selected ? "red": "gray"}
        onClick={onclick}
        /> 
    );
};

     // const onclick = () =>{
    //     setselectedStars(idx+1);
    // }