import React, { useState, useEffect } from "react";
import * as S from "./themeChanger.style";
import { useDispatch, useSelector } from "react-redux";

const ThemeChanger = ({left}) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const [opacityValue, setOpacityValue] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      setOpacityValue("1");
    }, 2600);
  }, );

  return (
    <S.Div left={left} onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      {isDarkMode ? (
        <S.Sun opacityvalue={opacityValue} />
      ) : (
        <S.Moon opacityvalue={opacityValue} />
      )}
    </S.Div>
  );
};

export default ThemeChanger;
