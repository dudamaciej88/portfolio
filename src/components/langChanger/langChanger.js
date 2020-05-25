import React from "react";
import * as S from "./langChanger.style";
import { useSelector, useDispatch } from "react-redux";

const LangChanger = () => {
  const langChoosen = useSelector((state) => state.language.language.lang);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (langChoosen === "english") {
      dispatch({ type: "SET_LANGUAGE", payload: "polish" });
    } else {
      dispatch({ type: "SET_LANGUAGE", payload: "english" });
    }
  };

  return (
    <S.Div onClick={() => clickHandler()}>
      {langChoosen === "english" ? <S.P>PL</S.P> : <S.P>EN</S.P>}
    </S.Div>
  );
};

export default LangChanger;
