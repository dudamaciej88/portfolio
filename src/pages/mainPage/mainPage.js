import React, { useState, useEffect } from "react";
import * as S from "./mainPage.style";
import Button from "../../components/button/button";
import ThemeChanger from "../../components/themeChanger/themeChanger";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const MainPage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [coverTop, setCoverTop] = useState("0");
  

  const animation = (lang) => {
    dispatch({ type: "SET_LANGUAGE", payload: lang });
    setCoverTop("-100vh");
    setTimeout(() => {
      history.push("/about");
    }, 2500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCoverTop("+100vh");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Container>
      <S.StarterDiv>
        <ThemeChanger left />
        <S.Cover coverTop={coverTop}></S.Cover>
        <div>
          <S.H1>Hi! I'm&nbsp;Maciej</S.H1>
          <S.Pp>FRONTEND DEVELOPER</S.Pp>
        </div>
        <S.LangDiv>
          <S.Pp>Choose language:</S.Pp>

          <Button clicked={() => animation("polish")}>POLSKI</Button>
          <Button clicked={() => animation("english")}>ENGLISH</Button>
        </S.LangDiv>
      </S.StarterDiv>
    </S.Container>
  );
};

export default MainPage;
