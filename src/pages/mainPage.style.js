import styled from "styled-components";

export const Container = styled.div`
position: relative;
  background-color: grey;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const StarterDiv = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  height: 100%;
  transition: transform 0.7s linear, background 1s linear;
  transform: ${(props) => (props.isStart ? "translateY(-100%)" : "none")};
`;

export const HContainer = styled.div``;

export const H1 = styled.h1`
padding-top: 130px;
  color: ${props => props.theme.colors.color};
  font-family: "Roboto";
  font-size: 70px;
  transition: color 1s linear;
`;

export const Pp = styled.p`
  color: ${props => props.theme.colors.color};
  padding: 24px 0px;
  font-family: "Open Sans";
  transition: color 1s linear;
`;

export const Cover = styled.div`
position: absolute;
background-color: ${props => props.theme.colors.background};
width: 100vw;
height: 100vh;
transition: top 4s linear, background 1s linear;
top: ${(props) => props.coverTop};
`;

export const LangDiv = styled.div`
display: flex;
flex-direction: column;
`;
