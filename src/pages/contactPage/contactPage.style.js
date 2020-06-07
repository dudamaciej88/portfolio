import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 1s linear;
`;

export const H2 = styled.h2`
  width: 250px;
  color: ${(props) => props.theme.colors.color};
  font-family: "Roboto";
  font-size: 50px;
  transition: transform 1s linear;
  transform: ${(props) => props.scaleValue};
  margin-bottom: 15px;
`;

export const Contact = styled.div`
  padding-top: 120px;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 768px) {
    max-width: 800px;
    margin: 0px auto;
  }
  @media (min-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const P = styled.p`
font-family: "Open Sans";
color: ${(props) => props.theme.colors.color};
transition: opacity 2s linear;
opacity: ${(props) => props.opacityValue};
line-height: 1.4;
`;

export const A = styled.a`
color: ${(props) => props.theme.colors.color};
`;