import React from "react";
import { useState } from "react";

export default function Greeting(props) {
  const { name } = props;

  const [isMorning, setIsMorning] = useState(true);

  return (
    <div>
      <h1>
        {isMorning ? "Good Morning" : "Good Eveneing"}, {name}!
      </h1>
      <button
        onClick={() => {
          setIsMorning(!isMorning);
        }}
      >
        Click to Change
      </button>
    </div>
  );
}
