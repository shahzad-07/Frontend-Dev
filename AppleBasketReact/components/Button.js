import React from "react";

export default function Button({ Imageurl, buttonName, clickHandler }) {
  return (
    <button onClick={clickHandler} title={buttonName}>
      <img src={Imageurl} alt={buttonName} />
    </button>
  );
}
