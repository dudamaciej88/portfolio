import React, { useState, useEffect } from "react";
import * as S from "./button.style";

const Button = ({ children }) => {
  const [opacityValue, setOpacityValue] = useState(0);

  useEffect(() => {
    console.log("UseEffect");
    setTimeout(() => {
      setOpacityValue("1");
    }, 4000);
  }, []);
  console.log("Button");
  return (
    <S.Button onClick={() => setOpacityValue("0")} opacityValue={opacityValue}>
      {children}
    </S.Button>
  );
};

export default Button;
