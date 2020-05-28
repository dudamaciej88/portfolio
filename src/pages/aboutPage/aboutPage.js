import React, { useState, useEffect } from "react";
import * as S from "./aboutPage.style";
import NavBar from "../../components/navBar/navBar";
import About from "../../components/about/about";
import Skills from "../../components/skills/skills";

const AboutPage = () => {
  const [backgroundOpacity, setBackgroundOpacity] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      setBackgroundOpacity("1");
    }, 1);
  }, []);

  return (
    <S.Div opacity={backgroundOpacity}>
      <NavBar />
      <About />
      <Skills />
    </S.Div>
  );
};

export default AboutPage;
