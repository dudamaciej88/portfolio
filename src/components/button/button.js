import React, { useState, useEffect } from "react";
import * as S from "./button.style";
import { useSelector } from "react-redux";

const Button = ({ children, clicked }) => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const [opacityValue, setOpacityValue] = useState(0);
  const [borderDarkValue, setBorderDarkValue] = useState("1px solid black");
  const [borderLightValue, setBorderLightValue] = useState("1px solid white");
  const [rotateArrow, setRotateArrow] = useState(false);
  const [arrowOpacity, setArrowOpacity] = useState("1");

  useEffect(() => {
    console.log("UseEffect");
    setTimeout(() => {
      setOpacityValue("1");
    }, 2500);
  }, []);
  console.log("Button");

  const clickHandler = () => {
    clicked();
    setTimeout(() => {
      setArrowOpacity("0");
    }, 500);
    setRotateArrow(true);
    if (isDarkMode) {
      setBorderDarkValue("1px solid white");
    } else {
      setBorderLightValue("1px solid black");
    }
  };

  return (
    <S.Button
      onClick={() => clickHandler()}
      opacityValue={opacityValue}
      borderValue={isDarkMode ? borderDarkValue : borderLightValue}
      arrowopacity={arrowOpacity}
    >
      {children}
      <S.Arrow rotatearrow={rotateArrow ? "rotate(180deg)" : "none"} />
    </S.Button>
  );
};

export default Button;
