import React from "react";
import * as S from "./themeChanger.style";
import { useDispatch, useSelector } from "react-redux";

const ThemeChanger = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  return (
    <div onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      {isDarkMode ? <S.Sun /> : <S.Moon />}
    </div>
  );
};

export default ThemeChanger;
