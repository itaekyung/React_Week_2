import React from "react";

function Box1({ initCount }) {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "#01c49f",
    color: "white",
  };
  console.log("box 1 컴포넌트가 렌더링되었습니다.");
  return (
    <div style={style}>
      <button
        onClick={() => {
          initCount();
        }}
      >
        초기화
      </button>
    </div>
  );
}

export default React.memo(Box1); // 함수형 컴포넌트를 사용했기 때문에 count를 초기화 해주는
