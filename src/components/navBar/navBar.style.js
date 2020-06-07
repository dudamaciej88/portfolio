import styled from "styled-components";

export const Div = styled.div`
position: fixed;
display: flex;
background-color: ${props => props.theme.colors.background};
transition: background-color 1s linear;
top: 0;
left: 0;
width: 100vw;
height: 60px;
z-index: 40;
`;