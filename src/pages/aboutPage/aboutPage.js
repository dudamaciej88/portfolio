import React from "react";
import * as S from "./aboutPage.style";

import About from "../../components/about/about";
import Skills from "../../components/skills/skills";

const AboutPage = () => {
  return (
    <S.Div>
      <About />
      <Skills />
    </S.Div>
  );
};

export default AboutPage;
