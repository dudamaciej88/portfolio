import React, { useState, useEffect } from "react";
import * as S from "./button.style";

const Button = () => {

    const [opacityValue, setOpacityValue] = useState(0)

    useEffect(() => {
        console.log("UseEffect")
        setTimeout(() => {
            setOpacityValue("1");
          }, 1000);
    }, [])
  console.log("Button");
  return <S.Button onClick={() => setOpacityValue("0")} opacityValue={opacityValue}>wybierz język</S.Button>;
};

export default Button;
