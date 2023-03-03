import React, { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const style = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
  };
  const plusStateCountBtnHandler = () => {
    setCount(count + 1);
  };
  const plusRefCountBtnHandler = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  return (
    <>
      <div style={style}>
        {" "}
        state 영역입니다. {count} <br />
        <button onClick={plusStateCountBtnHandler}>state 증가</button>
      </div>
      <div style={style}>
        ref 영역입니다. {countRef.current} <br />
        <button onClick={plusRefCountBtnHandler}>ref증가</button>
      </div>
    </>
  );
}

export default App;
