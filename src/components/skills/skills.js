import React, { useState, useEffect } from "react";
import * as S from "./skills.style";
import { useSelector } from "react-redux";
import SkillsDisplayer from "./skillsDisplayer/skillsDisplayer";

const Skills = () => {
  const [scaleValue, setScaleValue] = useState("scale(0,0)");

  const language = useSelector((state) => state.language.language);
  useEffect(() => {
    setTimeout(() => {
      setScaleValue("scale(1,1)");
    }, 2500);
  }, []);

  return (
    <S.Div>
      <S.H2 scaleValue={scaleValue}>{language.skills.header}</S.H2>
      <SkillsDisplayer />
    </S.Div>
  );
};

export default Skills;
