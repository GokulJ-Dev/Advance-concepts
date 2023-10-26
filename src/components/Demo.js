import React, { useState, useRef } from "react";

const Demo = () => {
  const [num, setNum] = useState(0);
  console.log("Component Renders");
  let i = useRef(0);
  console.log(i.current);
  return (
    <div className="demo-container">
      <div>
        <h1>{num}</h1>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Plus
        </button>
        <h1>{i.current}</h1>
        <button
          onClick={() => {
            i.current += 1;
          }}
        >
          Plus
        </button>
      </div>
    </div>
  );
};

export default Demo;
