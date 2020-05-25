import React, { useState } from "react";
import * as S from "./hamburger.style";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Div isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <S.Span1 isOpen={isOpen}></S.Span1>
      <S.Span2 isOpen={isOpen}></S.Span2>
      <S.Span3 isOpen={isOpen}></S.Span3>
      <S.Span4 isOpen={isOpen}></S.Span4>
    </S.Div>
  );
};

export default Hamburger;
