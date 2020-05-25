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
    <S.Div left={left} >
      {isDarkMode ? (
        <S.Sun opacityvalue={opacityValue} onClick={() => dispatch({ type: "TOGGLE_THEME" })}/>
      ) : (
        <S.Moon opacityvalue={opacityValue} onClick={() => dispatch({ type: "TOGGLE_THEME" })}/>
      )}
    </S.Div>
  );
};

export default ThemeChanger;
