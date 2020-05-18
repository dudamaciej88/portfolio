import React, { useState, useEffect } from "react";
import * as S from "./mainPage.style";
import Button from "../components/button/button";


const MainPage = () => {
  const [startAnim, setStartAnim] = useState();
  const [coverAnim, setCoverAnim] = useState();  
  console.log("MainPage");

  const animation = () => {
    setTimeout(() => {
      setStartAnim(true);
    }, 2000);
  };

  
  

  return (
    <S.Container>
       
      <S.StarterDiv isStart={startAnim}>
      <S.Cover coverStart={coverAnim}><button onClick={() => setCoverAnim(true)}>cover start</button></S.Cover>
          <div>
              <S.H1>Hi! I'm&nbsp;Maciej</S.H1>
              <S.Pp>FRONTEND DEVELOPER</S.Pp>
              </div>
      <div>
          <S.Pp>Choose language:</S.Pp>
        <button onClick={() => animation()}>KLIK</button>
        <Button />
        </div>
      </S.StarterDiv>
     
    </S.Container>
  );
};

export default MainPage;
