import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.color};
  width: 100%;
  height: 60px;
  font-family: "Roboto";
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: background-color 1s linear, border-bottom 1s linear,
    border-top 1s linear, border 1s linear;
  border: 1px solid ${(props) => props.theme.colors.background};
  border-bottom: ${(props) =>
    props.active
      ? `1px solid ${props.theme.colors.color}`
      : props.theme.colors.background};
  border-top: ${(props) =>
    props.active
      ? `1px solid ${props.theme.colors.color}`
      : props.theme.colors.background};
  @media (min-width: 768px) {
    border-top: ${(props) => props.theme.colors.background};
    margin-left: 15px;
  }
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.color};
  }
`;
