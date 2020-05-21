import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";

export const Sun = styled(SunIcon)`
  width: 25px;
  height: 25px;
  fill: white;
  margin: 15px 15px;
  transition: transform 1s linear;
  &:hover {
    transform: rotate(180deg) scale(1.2);
  }
`;

export const Moon = styled(MoonIcon)`
width: 25px;
height: 25px;
margin: 15px 15px;
transition: transform 1s linear;
&:hover {
    transform: scale(1.2);
}
`;
