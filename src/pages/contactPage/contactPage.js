import React, {useState, useEffect} from "react";
import * as S from "./contactPage.style";
import { useSelector } from "react-redux";
import ContactForm from "../../components/contactForm/contactForm";



const ContactPage = () => {
  const [scaleValue, setScaleValue] = useState("scale(0,0)");
  const [opacityValue, setOpacityValue] = useState("0");
  const language = useSelector((state) => state.language.language);
  
  useEffect(() => {
    let timer1 = setTimeout(() => {
      setScaleValue("scale(1,1)");
    }, 500);
    let timer2 =setTimeout(() => {
      setOpacityValue("1");
    }, 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <S.Div>
     <S.Contact> 
     <S.H2 scaleValue={scaleValue}>{language.contact.header}</S.H2>
     <S.P opacityValue={opacityValue}>{language.contact.text1} <S.A href="mailto:dudamaciejweb@gmail.com">dudamaciejweb@gmail.com</S.A></S.P>
     <S.P opacityValue={opacityValue}>{language.contact.text2}</S.P>
     <ContactForm/>
     
     </S.Contact>
    </S.Div>
  );
};

export default ContactPage;
