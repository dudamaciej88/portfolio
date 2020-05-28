import styled from "styled-components";



export const Div = styled.div`
  padding-top: 60px;
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

export const H2 = styled.h2`
  width: 250px;
  color: ${(props) => props.theme.colors.color};
  font-family: "Roboto";
  font-size: 50px;
  transition: transform 1s linear;
  transform: ${(props) => props.scaleValue};
  margin-bottom: 15px;
`;




