import React, { useState } from "react";

const heavyWork = () => {
  console.log("무거운 작업!");
  return ["홍길동", "김민수"];
};

function App() {
  const [names, setNames] = useState(() => {
    return heavyWork();
  }); // 무거운 작업일때는 초기값에 콜백함수를 넣기

  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    return setInput(e.target.value);
  };
  // const clickAddbtn = () => {
  //   // const newNames = [input, ...names];
  //   setNames([input, ...names]);
  // };

  const clickAddbtn = () => {
    return setNames((아무이름) => {
      return [input, ...아무이름];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button
        onClick={() => {
          clickAddbtn();
          // return clickAddbtn(), clickAddbtn(), clickAddbtn();
        }}
      >
        upload
      </button>{" "}
      {names.map((name, i) => {
        return <p key={i}>{name}</p>;
      })}
    </div>
  );
}

export default App;
