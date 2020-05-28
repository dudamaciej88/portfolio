import React, { useState } from "react";
import * as S from "./navBar.style";
import { useSelector } from "react-redux";
import ThemeChanger from "../themeChanger/themeChanger";
import LangChanger from "../langChanger/langChanger";
import Hamburger from "../hamburger/hamburger";
import MenuMobile from "./menuMobile/menuMobile";

const NavBar = () => {
  const language = useSelector((state) => state.language.language);
  const [hambOpen, setHambOpen] = useState(false);

  console.log(language);

  

  return (
    <S.Div>
      <ThemeChanger />
      <LangChanger />
      <Hamburger hambClicked={() => setHambOpen(!hambOpen)} />
      <MenuMobile isHambOpen={hambOpen} />
    </S.Div>
  );
};

export default NavBar;
