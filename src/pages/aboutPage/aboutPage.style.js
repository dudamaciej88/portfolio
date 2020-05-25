import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  background-image: url(${(props) => props.theme.backgrounds.image});
  background-size: cover;
  transition: opacity 1s linear, background-image 1s linear;
  opacity: ${(props) => props.opacity};
`;
