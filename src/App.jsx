import React, { useEffect, useRef, useState } from "react";

function App() {
  const [id, setId] = useState("");
  const idRef = useRef("");
  const pwRef = useRef("");
  //화면이 렌더링 될 때, 어떤 작업을 하고 싶다 ! : useEffect !!!! r
  useEffect(() => {
    idRef.current.focus();
    console.log(pwRef); // current가 input값으로 바뀜
    console.log("랜더링 됐어요");
  }, []);

  // useEffect(() => {
  //   if (id.length >= 10) {
  //     return pwRef.current.focus();
  //   }
  // }, [id]);

  return (
    <>
      <div>
        아이디 :{" "}
        <input
          type="text"
          ref={idRef}
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            // 리액트에서 state 업데이트 방식은 배치 업데이트
            // 내가 궁금해했던 하나씩 늦는 이유 -> 배치 업데이트
            if (id.length >= 10) {
              pwRef.current.focus();
            }
          }}
        />
      </div>
      <div>
        비밀번호 : <input type="password" ref={pwRef} />
      </div>
    </>
  );
}

export default App;
