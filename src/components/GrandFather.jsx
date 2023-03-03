import React from "react";
import { FamilyContext } from "../context/FamilyContext";
import Father from "./Father";

// gf -> Child 한테 어떤 정보를 알려줘서 차일드가 그 내용을 출력하도록
function GrandFather() {
  const houseName = "스파르타";
  const pocketMoney = 10000;
  return (
    <FamilyContext.Provider value={{ houseName, pocketMoney }}>
      <Father />;
    </FamilyContext.Provider>
  );
}

export default GrandFather;
