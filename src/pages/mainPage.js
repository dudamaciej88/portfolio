import React, { useState, useEffect } from "react";
import * as S from "./mainPage.style";
import Button from "../components/button/button";
import ThemeChanger from "../components/themeChanger/themeChanger";
import {useSelector} from "react-redux"

const MainPage = () => {

  const isDarkMode = useSelector(state => state.ui.isDarkMode)
  const [startAnim, setStartAnim] = useState();
  const [coverTop, setCoverTop] = useState("0");
  console.log("MainPage");

  const animation = () => {
    setCoverTop("-100vh");
    setTimeout(() => {
      setStartAnim(true);
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCoverTop("+100vh");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Container>
      <S.StarterDiv isStart={startAnim}>
        <ThemeChanger />
        <S.Cover coverTop={coverTop}></S.Cover>
        <div>
          <S.H1>Hi! I'm&nbsp;Maciej</S.H1>
          <S.Pp>FRONTEND DEVELOPER</S.Pp>
        </div>
        <S.LangDiv>
          <S.Pp>Choose language:</S.Pp>

          <Button clicked={() => animation()}>POLSKI</Button>
          <Button clicked={() => animation()}>ENGLISH</Button>
        </S.LangDiv>
      </S.StarterDiv>
    </S.Container>
  );
};

export default MainPage;
