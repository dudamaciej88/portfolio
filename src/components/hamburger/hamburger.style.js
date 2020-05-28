import styled from "styled-components";

export const Div = styled.div`
  display: inline-block;
  width: 34px;
  height: 30px;
  position: relative;
  margin-top: 16px;
  margin-left: auto;
  margin-right: 15px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out, opacity 1s linear;
  opacity: ${(props) => props.opacityvalue};
  cursor: pointer;
  z-index: 100;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Span1 = styled.span`
  display: block;
  position: absolute;
  height: 4px;
  width: ${(props) => (props.isOpen ? "0%" : "100%")};
  background: ${(props) => props.theme.colors.color};
  border-radius: 4px;
  opacity: 1;
  left: ${(props) => (props.isOpen ? "50%" : "0")};
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  top: ${(props) => (props.isOpen ? "10px" : "0px")};
`;

export const Span2 = styled.span`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: ${(props) => props.theme.colors.color};
  border-radius: 4px;
  opacity: 1;
  left: 0;
  transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0deg)")};
  transition: 0.25s ease-in-out;
  top: 10px;
`;

export const Span3 = styled.span`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: ${(props) => props.theme.colors.color};
  border-radius: 4px;
  opacity: 1;
  left: 0;
  transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0deg)")};
  transition: 0.25s ease-in-out;
  top: 10px;
`;

export const Span4 = styled.span`
  display: block;
  position: absolute;
  height: 4px;
  width: ${(props) => (props.isOpen ? "0%" : "100%")};
  background: ${(props) => props.theme.colors.color};
  border-radius: 4px;
  opacity: 1;
  left: ${(props) => (props.isOpen ? "50%" : "0%")};
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  top: ${(props) => (props.isOpen ? "10px" : "20px")};
`;
