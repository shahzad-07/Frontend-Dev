import React from "react";
import { useState } from "react";
import Button from "./Button";

import LeftArrow from "../assets/images/pngwingleft.png";
import RightArrow from "../assets/images/pngwingright.png";
import AppleBasket from "./AppleBasket";

import "./AppleCounter.css";

// let rightCount = 0;
// let leftCount = totalAppleCount - rightCount;

const AppleCounter = () => {
  const totalAppleCount = 10;

  const [rightCount, setRightCount] = useState(0);
  const [leftCount, setLeftCount] = useState(totalAppleCount - rightCount);

  const leftClickHandler = () => {
    if (rightCount > 0) {
      setLeftCount(leftCount + 1);
      setRightCount(rightCount - 1);
    }
  };

  const rightClickHandler = () => {
    if (leftCount > 0) {
      setLeftCount(leftCount - 1);
      setRightCount(rightCount + 1);
    }
  };

  return (
    <>
      <section>
        <AppleBasket appleCount={leftCount} basketName="Basket 1" />
        <Button
          clickHandler={leftClickHandler}
          Imageurl={LeftArrow}
          buttonName="Left Arrow"
        />
        <Button
          clickHandler={rightClickHandler}
          Imageurl={RightArrow}
          buttonName="Right Arrow"
        />
        <AppleBasket appleCount={rightCount} basketName="Basket 2" />
      </section>

      {/* 
      <p
        style={{
          textAlign: "center",
          marginTop: "32px",
        }}
      >
        <button>Re-Render</button>
      </p> */}
    </>
  );
};

export default AppleCounter;
