import React from "react";
import * as S from "./navBar.style";
import { useSelector } from "react-redux";
import ThemeChanger from "../themeChanger/themeChanger";
import LangChanger from "../langChanger/langChanger";
import Hamburger from "../hamburger/hamburger";

const NavBar = () => {
  const language = useSelector((state) => state.language.language);
  console.log(language);
  return (
    <S.Div>
      <ThemeChanger />
      <LangChanger />
      <Hamburger />
    </S.Div>
  );
};

export default NavBar;
