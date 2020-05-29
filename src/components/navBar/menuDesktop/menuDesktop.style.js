import styled from "styled-components";

export const Div = styled.div`
display: none;
@media (min-width: 768px) {
    transition: opacity 1s linear;
    display: flex;
    position: relative;
    margin-left: auto;
    margin-right: 15px;
    opacity: ${(props) => props.opacityvalue};
}
`;