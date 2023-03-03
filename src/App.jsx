import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");

  //clean up
  useEffect(() => {
    console.log(`hello useEffect : ${value}`);
    return () => {
      // 컴포넌트가 죽을 때 콘솔을 찍고 싶다.
      // 이게 무슨 소리일까?
    };
  }, [value]);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
