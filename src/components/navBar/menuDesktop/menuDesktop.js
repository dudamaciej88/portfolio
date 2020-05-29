import React, { useState, useEffect } from "react";
import * as S from "./menuDesktop.style";
import NavLink from "../navLink/navLink";
import { useSelector } from "react-redux";

const MenuDesktop = () => {
  const language = useSelector((state) => state.language.language);
  const [opacityValue, setOpacityValue] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      setOpacityValue("1");
    }, 2600);
  });

  return (
    <S.Div opacityvalue={opacityValue}>
      <NavLink to={"/about"}>{language.navBar.about}</NavLink>
      <NavLink to={"/projects"}>{language.navBar.projects}</NavLink>
      <NavLink to={"/contact"}>{language.navBar.contact}</NavLink>
    </S.Div>
  );
};

export default MenuDesktop;
