import React, { useState, useCallback } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App() {
  console.log("App 컴포넌트가 렌더링 되었습니다.");
  const [count, setCount] = useState(0);
  //1 증가
  const onPlusBtnClickHandler = () => {
    setCount(count + 1);
  };
  const onMinusBtnClickHandler = () => {
    setCount(count - 1);
  };
  // count 를 초기화해주는 함수
  const initCount = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다.`);
    setCount(0);
  }, [count]); // 의존성 배열에 대해 다시 한번 공부하기,,
  // count가 변경될때 만큼은 다시 불러줘

  return (
    <>
      <h3>카운트 예제입니다.</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusBtnClickHandler}>+</button>
      <button onClick={onMinusBtnClickHandler}>-</button>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
