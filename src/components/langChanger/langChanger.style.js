import styled from "styled-components";

export const Div = styled.div`
float: left;

width: 25px;
height: 25px;
margin: 15px 15px;
cursor: pointer;
`;

export const P = styled.p`
font-family: "Open Sans";
font-size: 18px;
margin: 3.5px 0px;
color: ${props => props.theme.colors.color};
`;