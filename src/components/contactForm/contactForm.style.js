import styled from "styled-components";

export const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  transition: opacity 2s linear;
  opacity: ${(props) => props.opacityValue};
`;

export const Label = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 40%;
  margin: 5px 5px;
  padding: 5px 5px;
  font-family: "Open Sans";
  &::placeholder {
    color: black;
    opacity: 1;
  }
`;

export const Textarea = styled.textarea`
  width: 90%;
  padding: 5px 5px;
  box-sizing: border-box;
  resize: none;
  &::placeholder {
    color: black;
    opacity: 1;
  }
`;

export const Button = styled.button`
  margin: 10px auto;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.color};
  font-family: "Open Sans";
  width: 150px;
  box-sizing: border-box;
  padding: 5px 5px;
  border: 1px solid ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.color};
  transition: border-bottom 1s linear, border-top 1s linear, border 1s linear,
    background 1s linear, color 1s linear;
  &:hover {
    cursor: pointer;
    border-bottom: 1px solid ${(props) => props.theme.colors.color};
    border-top: 1px solid ${(props) => props.theme.colors.color};
  }
`;

export const P = styled.p`
font-family: "Open Sans";
color: ${(props) => props.theme.colors.color};
transition: opacity 2s linear;
opacity: 1;
line-height: 1.4;
`;
