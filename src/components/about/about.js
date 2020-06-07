import React, { useState, useEffect } from "react";
import * as S from "./about.style";
import { useSelector } from "react-redux";

const About = () => {
  const [scaleValue, setScaleValue] = useState("scale(0,0)");
  const [opacityValue, setOpacityValue] = useState("0");
  const language = useSelector((state) => state.language.language);
  useEffect(() => {
    let timer = setTimeout(() => {
      setScaleValue("scale(1,1)");
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setOpacityValue("1");
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <S.Div>
      <S.H2 scaleValue={scaleValue}>{language.about.header}</S.H2>
      <S.P opacityValue={opacityValue}>{language.about.text}</S.P>
    </S.Div>
  );
};

export default About;
