import styled from "styled-components";

export const Div = styled.div`
  line-height: 58px;
  width: 25px;
  height: 58px;
  margin: 0px 15px;
  cursor: pointer;
  transition: opacity 1s linear;
  opacity: ${(props) => props.opacityvalue};
`;

export const P = styled.p`
  font-family: "Open Sans";
  font-size: 18px;

  color: ${(props) => props.theme.colors.color};
`;
