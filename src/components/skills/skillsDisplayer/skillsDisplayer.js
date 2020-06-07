import React, { useState, useEffect } from "react";
import * as S from "./skillsDisplayer.style";

const SkillsDisplayer = () => {
  const [opacityValue, setOpacityValue] = useState("0");

  useEffect(() => {
     let timer = setTimeout(() => {
      setOpacityValue("1");
    }, 3500);
    return () => {
      
        clearTimeout(timer);
      
    }
  }, []);

  return (
    <S.Div opacityValue={opacityValue}>
      <S.SkillCard>
        <S.Round>
          <S.ReactIco />
        </S.Round>
        <S.P>React</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.ReduxIco />
        </S.Round>
        <S.P>Redux</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.RouterIco />
        </S.Round>
        <S.P>Router</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.JsIco />
        </S.Round>
        <S.P>JavaScript</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.Html5Ico />
        </S.Round>
        <S.P>HTML5</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.Css3Ico />
        </S.Round>
        <S.P>CSS3</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.SassIco />
        </S.Round>
        <S.P>Sass</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.NpmIco />
        </S.Round>
        <S.P>Npm</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.FirebaseIco />
        </S.Round>
        <S.P>Firebase</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.GitIco />
        </S.Round>
        <S.P>Git</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.WebpackIco />
        </S.Round>
        <S.P>Webpack</S.P>
      </S.SkillCard>
      <S.SkillCard>
        <S.Round>
          <S.VscIco />
        </S.Round>
        <S.P>Vsc</S.P>
      </S.SkillCard>
    </S.Div>
  );
};

export default SkillsDisplayer;
