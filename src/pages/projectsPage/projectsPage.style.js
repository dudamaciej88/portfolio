import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 1s linear;
`;

export const Projects = styled.div`
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
  }`;

  export const H3 = styled.h3`
  width: 250px;
  color: ${(props) => props.theme.colors.color};
  font-family: "Roboto";
  font-size: 50px;
  transition: color 1s linear, transform 1s linear;
  transform: ${(props) => props.scaleValue};
  margin-bottom: 15px;
`;

export const DivFlex = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
transition: opacity 1s linear;
opacity: ${(props) => props.opacityValue};
`;
