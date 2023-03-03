import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const handleCountUpdate = () => {
    return setCount((count) => {
      return count + 1;
    });
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  // 의존성 배열을 안써주면 렌더링 될때마다(=스테이트가 업데이트 될 때마다) 매번 실행됨
  // 마운트 될 때 + 의존성배열이 변경될때만 실행됨
  useEffect(() => {
    console.log("name 변화");
  }, [name]); //의존성배열

  // useEffect(() => {
  //   console.log("name 변화");
  // }, []); // 이 코드는 마운트 될 때 만 실행됩니다.

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span> name : {name}</span>
    </div>
  );
}

export default App;
