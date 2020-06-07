import React, { useState, useEffect } from "react";
import * as S from "./hamburger.style";

const Hamburger = ({hambClicked, isOpen}) => {
  const [opacityValue, setOpacityValue] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      setOpacityValue("1");
    }, 2600);
  }, );

    const clickHandler = () => {
        
        hambClicked();
    }

  return (
    <S.Div opacityvalue={opacityValue} isOpen={isOpen} onClick={() => clickHandler()}>
      <S.Span1 isOpen={isOpen}></S.Span1>
      <S.Span2 isOpen={isOpen}></S.Span2>
      <S.Span3 isOpen={isOpen}></S.Span3>
      <S.Span4 isOpen={isOpen}></S.Span4>
    </S.Div>
  );
};

export default Hamburger;
