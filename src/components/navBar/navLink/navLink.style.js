import styled from "styled-components";

export const Button = styled.button`
background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.color};
  width: 100%;
  height: 60px;
  font-family: "Roboto";
  font-size: 16px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.background};
  border-bottom: ${(props) => props.active ? `1px solid ${props.theme.colors.color}` : "none"};
  border-top: ${(props) => props.active ? `1px solid ${props.theme.colors.color}` : "none"};
`;