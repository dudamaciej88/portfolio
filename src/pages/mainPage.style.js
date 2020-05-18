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
  background-color: black;
  width: 100%;
  height: 100%;
  transition: ${(props) => (props.isStart ? "transform 1s linear" : "none")};
  transform: ${(props) => (props.isStart ? "translateY(-100%)" : "none")};
`;

export const HContainer = styled.div``;

export const H1 = styled.h1`
padding-top: 130px;
  color: white;
  font-family: "Roboto";
  font-size: 70px;
`;

export const Pp = styled.p`
  color: white;
  padding: 24px 0px;
  font-family: "Open Sans";
`;

export const Cover = styled.div`
position: absolute;
background-color: black;
width: 100vw;
height: 100vh;
transition: ${(props) => (props.coverStart ? "top 3s linear" : "none")};
top: ${(props) => (props.coverStart ? "100vh" : "0")};
`;
