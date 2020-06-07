import React, { useState, useEffect } from "react";
import * as S from "./projectsPage.style";
import { useSelector } from "react-redux";
import ProjectDisplayer from "../../components/projectDisplayer/projectDisplayer";
import coolcampDesktop from "../../assets/projects/coolcamp desktop.jpg";
import coolcampMobile from "../../assets/projects/coolcamp mobile.jpg";
import nagmatDesktop from "../../assets/projects/nagmat desktop.jpg";
import nagmatMobile from "../../assets/projects/nagmat mobile.jpg";
import hangmanMobile from "../../assets/projects/hangman mobile.jpg";
import hangmanDesktop from "../../assets/projects/hangman desktop.jpg";
import portfolioDesktop from "../../assets/projects/portfolio desktop.jpg";
import portfolioMobile from "../../assets/projects/portfolio mobile.jpg";

const ProjectsPage = () => {
  const [scaleValue, setScaleValue] = useState("scale(0,0)");
  const language = useSelector((state) => state.language.language);
  const [opacityValue, setOpacityValue] = useState("0");

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setScaleValue("scale(1,1)");
    }, 500);
    let timer2 = setTimeout(() => {
      setOpacityValue("1");
    }, 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  });

  return (
    <S.Div>
      <S.Projects>
        <S.H3 scaleValue={scaleValue}>{language.projects.header}</S.H3>
        <S.DivFlex opacityValue={opacityValue}>
          <ProjectDisplayer
          textLive={language.projects.live}
          urlLive={"/"}
          textCode={language.projects.code}
          urlCode={"/"}
          name={language.projects.project4.name}
            srcDesktop={portfolioDesktop}
            srcMobile={portfolioMobile}
            description={language.projects.project4.description}
            techHeader={language.projects.technologies}
            techDescription={language.projects.project4.technologies}
          />
          <ProjectDisplayer
            textLive={language.projects.live}
            urlLive={"https://dudamaciej88.github.io/nagmat/"}
            textCode={language.projects.code}
            urlCode={"https://github.com/dudamaciej88/nagmat"}
            name={language.projects.project1.name}
            srcDesktop={nagmatDesktop}
            srcMobile={nagmatMobile}
            description={language.projects.project1.description}
            techHeader={language.projects.technologies}
            techDescription={language.projects.project1.technologies}
          />
          <ProjectDisplayer
            textLive={language.projects.live}
            urlLive={"https://dudamaciej88.github.io/coolcamp/"}
            textCode={language.projects.code}
            urlCode={"https://github.com/dudamaciej88/coolcamp"}
            name={language.projects.project2.name}
            srcDesktop={coolcampDesktop}
            srcMobile={coolcampMobile}
            description={language.projects.project2.description}
            techHeader={language.projects.technologies}
            techDescription={language.projects.project2.technologies}
          />
          <ProjectDisplayer
            textLive={language.projects.live}
            urlLive={
              "https://dudamaciej88.github.io/dudamaciej88-hangman/build/index.html"
            }
            textCode={language.projects.code}
            urlCode={"https://github.com/dudamaciej88/dudamaciej88-hangman"}
            name={language.projects.project3.name}
            srcDesktop={hangmanDesktop}
            srcMobile={hangmanMobile}
            description={language.projects.project3.description}
            techHeader={language.projects.technologies}
            techDescription={language.projects.project3.technologies}
          />
        </S.DivFlex>
      </S.Projects>
    </S.Div>
  );
};

export default ProjectsPage;
