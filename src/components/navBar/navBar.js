import React, { useState } from "react";
import * as S from "./navBar.style";
import { useLocation } from "react-router-dom";
import ThemeChanger from "../themeChanger/themeChanger";
import LangChanger from "../langChanger/langChanger";
import Hamburger from "../hamburger/hamburger";
import MenuMobile from "./menuMobile/menuMobile";
import MenuDesktop from "./menuDesktop/menuDesktop";

const NavBar = () => {
  const [hambOpen, setHambOpen] = useState(false);
  let location = useLocation();

  return (
    <S.Div>
      <ThemeChanger />
      {location.pathname !== "/" && (
        <>
          <LangChanger />
          <Hamburger
            isOpen={hambOpen}
            hambClicked={() => setHambOpen(!hambOpen)}
          />
          <MenuMobile
            menuClicked={() => setHambOpen(!hambOpen)}
            isHambOpen={hambOpen}
          />
          <MenuDesktop />
        </>
      )}
    </S.Div>
  );
};

export default NavBar;
