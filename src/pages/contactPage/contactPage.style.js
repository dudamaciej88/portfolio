import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  transition: background-image 1s linear;
`;

export const Button = styled.button`
margin-top: 100px;
`;
