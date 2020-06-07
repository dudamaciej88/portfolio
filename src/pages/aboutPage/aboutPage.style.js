import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  
  transition: opacity 1s linear, background-color 1s linear;
  
`;
