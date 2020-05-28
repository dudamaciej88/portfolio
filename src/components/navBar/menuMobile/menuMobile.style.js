import styled from "styled-components"

export const Div = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 100vw;
height: 240px;
background-color: ${(props) => props.theme.colors.background};
top: ${(props) => props.isHambOpen ? "0px" : "-240px"};
transition: top 0.5s linear;
z-index: 50;
opacity: 1;
`;