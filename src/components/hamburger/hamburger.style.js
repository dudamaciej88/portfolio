import styled from "styled-components";

export const Div = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

export const Span1 = styled.span`
  display: block;
  position: absolute;
  height: 9px;
  width: ${(props) => (props.isOpen ? "0%" : "100%")};
  background: ${props => props.theme.colors.color};
  border-radius: 9px;
  opacity: 1;
  left: ${(props) => (props.isOpen ? "50%" : "0")};
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  top: ${(props) => (props.isOpen ? "18px" : "0px")};
`;

export const Span2 = styled.span`
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: ${props => props.theme.colors.color};
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0deg)")};
  transition: 0.25s ease-in-out;
  top: 18px;
`;

export const Span3 = styled.span`
  display: block;
  position: absolute;
  height: 9px;
  width: 100%;
  background: ${props => props.theme.colors.color};
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0deg)")};
  transition: 0.25s ease-in-out;
  top: 18px;
`;

export const Span4 = styled.span`
  display: block;
  position: absolute;
  height: 9px;
  width: ${(props) => (props.isOpen ? "0%" : "100%")};
  background: ${props => props.theme.colors.color};
  border-radius: 9px;
  opacity: 1;
  left: ${(props) => (props.isOpen ? "50%" : "0%")};
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  top: ${(props) => (props.isOpen ? "18px" : "36px")};
`;
