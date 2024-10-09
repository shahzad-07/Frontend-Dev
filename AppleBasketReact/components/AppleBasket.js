import React from "react";

export default function AppleBasket({ appleCount, basketName }) {
  return (
    <div className="apple-basket">
      <h2>
        <span>{appleCount}</span> Apples
      </h2>
      <p>{basketName}</p>
    </div>
  );
}
