import React from 'react';
import * as S from "./projectDisplayer.style";
import ProjectBtn from "./projectBtn/projectBtn";


const ProjectDisplayer = ({srcDesktop, srcMobile, name, description, textLive, urlLive, textCode, urlCode, techHeader, techDescription}) => {
    return (<S.Div>
       <S.Name>{name}</S.Name>
       <S.ImagesDiv>
           <S.ImgDesktop src={srcDesktop} alt="desktop view"></S.ImgDesktop>
           <S.ImgMobile src={srcMobile} alt="mobile view"></S.ImgMobile>
           </S.ImagesDiv>
       <S.BtnDiv>
           <ProjectBtn text={textLive} url={urlLive}/>
           <ProjectBtn text={textCode} url={urlCode}/>
           </S.BtnDiv>
    <S.P>{description}</S.P>
    <S.H5>{techHeader}</S.H5>
    <S.P>{techDescription}</S.P>
    </S.Div>)
}

export default ProjectDisplayer;