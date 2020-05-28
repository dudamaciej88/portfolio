import React, { useState, useEffect } from "react";
import * as S from "./langChanger.style";
import { useSelector, useDispatch } from "react-redux";

const LangChanger = () => {
  const langChoosen = useSelector((state) => state.language.language.lang);
  const dispatch = useDispatch();
  const [opacityValue, setOpacityValue] = useState("0");

  useEffect(() => {
    setTimeout(() => {
      setOpacityValue("1");
    }, 2600);
  }, );

  const clickHandler = () => {
    if (langChoosen === "english") {
      dispatch({ type: "SET_LANGUAGE", payload: "polish" });
    } else {
      dispatch({ type: "SET_LANGUAGE", payload: "english" });
    }
  };

  return (
    <S.Div opacityvalue={opacityValue} onClick={() => clickHandler()}>
      {langChoosen === "english" ? <S.P>PL</S.P> : <S.P>EN</S.P>}
    </S.Div>
  );
};

export default LangChanger;
