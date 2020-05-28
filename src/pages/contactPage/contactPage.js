import React from "react";
import * as S from "./contactPage.style";
import NavBar from "../../components/navBar/navBar";
import { useHistory } from "react-router-dom";

const ContactPage = () => {
  let history = useHistory();
  return (
    <S.Div>
      <NavBar />
      <S.Button onClick={() => history.push("/about")}>KLIK</S.Button>
      <S.Button onClick={() => console.log(history)}>KLIK KLIK</S.Button>
    </S.Div>
  );
};

export default ContactPage;
