import React from "react";

function Box3() {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "yellow",
    color: "while",
  };
  console.log("box 3 컴포넌트가 렌더링되었습니다.");
  return <div style={style}>Box3</div>;
}

export default React.memo(Box3);
