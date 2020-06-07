import styled from "styled-components";

export const Link = styled.a`
color: ${(props) => props.theme.colors.color};
border-bottom: 1px solid ${(props) => props.theme.colors.color};
border-top: 1px solid ${(props) => props.theme.colors.color};
border-left: 1px solid ${(props) => props.theme.colors.background};
border-right: 1px solid ${(props) => props.theme.colors.background};
transition: all 1s linear;
box-sizing: border-box;
padding: 5px 20px;
cursor: pointer;
text-decoration: none;
&:hover {
    border: 1px solid ${(props) => props.theme.colors.color};
}
`;