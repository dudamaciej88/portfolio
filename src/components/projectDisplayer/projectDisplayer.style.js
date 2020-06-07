import styled from "styled-components";

export const Div = styled.div`
display: flex;
flex-direction: column;
width: 100%;
overflow: hidden;
transition: background-color 1s linear;
background-color: ${(props) => props.theme.colors.background};
@media (min-width: 768px) {
    width: 45%;
}
`;

export const Name = styled.h4`
transition: color 1s linear;
color: ${(props) => props.theme.colors.color};
font-family: "Roboto";
font-size: 36px;
margin: 10px auto;
`;

export const ImagesDiv = styled.div`
position: relative;
overflow: hidden;
`;

export const ImgDesktop = styled.img`
width: 100%;
`;

export const ImgMobile = styled.img`
position: absolute;
width: 25%;
bottom: 3px;
right: 0px;
`;

export const BtnDiv = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
`;

export const H5 = styled.h5`
color: ${(props) => props.theme.colors.color};
font-family: "Roboto";
font-size: 24px;
`;

export const P = styled.p`
color: ${(props) => props.theme.colors.color};
font-family: "Open Sans";
margin: 10px 0px;
`;

