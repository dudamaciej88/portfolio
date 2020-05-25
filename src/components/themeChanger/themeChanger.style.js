import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";

export const Div = styled.div`
float: ${props => props.left ? "left" : "none"};
`;

export const Sun = styled(SunIcon)`
  width: 25px;
  height: 25px;
  fill: white;
  margin: 15px 15px;
  transition: transform 1s linear, opacity 1s linear;
  opacity: ${props => props.opacityvalue};
  &:hover {
    transform: rotate(180deg) scale(1.2);
  }
`;

export const Moon = styled(MoonIcon)`
width: 25px;
height: 25px;
margin: 15px 15px;
transition: transform 1s linear, opacity 1s linear;
opacity: ${props => props.opacityvalue};
&:hover {
    transform: scale(1.2);
}
`;
