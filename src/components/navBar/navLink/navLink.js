import React from "react";
import * as S from "./navLink.style";
import { useHistory, useLocation } from "react-router-dom";

const NavLink = ({ children, to }) => {
  let history = useHistory();
  let location = useLocation();

  const clickHandler = (url) => {
    history.push(url);
  };

  return <S.Button active={location.pathname === to} onClick={() => clickHandler(to)}>{children}</S.Button>;
};

export default NavLink;
