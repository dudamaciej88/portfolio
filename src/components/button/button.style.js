import styled from "styled-components";

export const Button = styled.button`
background-color: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.color};
font-family: "Open Sans";
width: 150px;
margin: 6px auto;
padding: 6px 4px;
outline: none;
border: ${props => props.borderValue};
transition: opacity 0.7s ease-in-out, border-bottom 1s linear, border-top 1s linear, border 1s linear, background 1s linear, color 1s linear;
opacity: ${props => props.opacityValue};
&:hover {
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.colors.color};
    border-top: 1px solid ${props => props.theme.colors.color};
}

`;