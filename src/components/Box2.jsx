import React from "react";

function Box2() {
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
    color: "white",
  };
  console.log("box 2 컴포넌트가 렌더링되었습니다.");
  return <div style={style}>Box2</div>;
}

export default React.memo(Box2);
