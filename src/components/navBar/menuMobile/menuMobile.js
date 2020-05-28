import React from "react";
import * as S from "./menuMobile.style";
import NavLink from "../navLink/navLink";
import { useSelector } from "react-redux";


const MenuMobile = ({ isHambOpen }) => {
  const language = useSelector((state) => state.language.language);

  return <S.Div isHambOpen={isHambOpen}>
    <NavLink to={"/about"}>{language.navBar.about}</NavLink>
    <NavLink to={"/projects"}>{language.navBar.projects}</NavLink>
    <NavLink to={"/contact"}>{language.navBar.contact}</NavLink>
  </S.Div>;
};

export default MenuMobile;
