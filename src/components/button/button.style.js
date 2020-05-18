import styled from "styled-components";

export const Button = styled.button`
transition: opacity 1000ms ease-in-out;
opacity: ${props => props.opacityValue};
`;