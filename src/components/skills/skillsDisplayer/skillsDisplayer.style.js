import styled from "styled-components";
import { ReactComponent as ReactIcon } from "../../../assets/icons/reactIcon.svg";
import { ReactComponent as ReduxIcon } from "../../../assets/icons/reduxIcon.svg";
import { ReactComponent as JsIcon } from "../../../assets/icons/jsShield.svg";
import { ReactComponent as RouterIcon } from "../../../assets/icons/routerIcon.svg";
import { ReactComponent as Html5Icon } from "../../../assets/icons/html5.svg";
import { ReactComponent as Css3Icon } from "../../../assets/icons/css3.svg";
import { ReactComponent as Sass3Icon } from "../../../assets/icons/sass.svg";
import { ReactComponent as NpmIcon } from "../../../assets/icons/npm.svg";
import { ReactComponent as FirebaseIcon } from "../../../assets/icons/firebase.svg";
import { ReactComponent as GitIcon } from "../../../assets/icons/git.svg";
import { ReactComponent as WebpackIcon } from "../../../assets/icons/webpack.svg";
import { ReactComponent as VscIcon } from "../../../assets/icons/vsc.svg";

export const Div = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 auto;
justify-content: center;
transition: opacity 2s linear;
opacity: ${(props) => props.opacityValue};
`;

export const SkillCard = styled.div`
display: flex;
align-items: center;
align-content: center;
flex-direction: column;
margin: 15px 0px;
width: 80px;
`;

export const P = styled.p`
font-family: "Open Sans";
color: ${(props) => props.theme.colors.color};
margin: 10px auto;
`;

export const Round = styled.div`
  background-color: white;
  border-radius: 50%;
  border: 2px solid black;
  width: 60px;
  height: 60px;
`;

export const ReactIco = styled(ReactIcon)`
  width: 60px;
  height: 60px;
`;

export const RouterIco = styled(RouterIcon)`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`;

export const VscIco = styled(VscIcon)`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`;

export const WebpackIco = styled(WebpackIcon)`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`;

export const GitIco = styled(GitIcon)`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`;

export const FirebaseIco = styled(FirebaseIcon)`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`;

export const NpmIco = styled(NpmIcon)`
  width: 30px;
  height: 30px;
  margin: 25px 15px;
`;

export const SassIco = styled(Sass3Icon)`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`;

export const Css3Ico = styled(Css3Icon)`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`;

export const Html5Ico = styled(Html5Icon)`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`;

export const ReduxIco = styled(ReduxIcon)`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`;

export const JsIco = styled(JsIcon)`
  width: 30px;
  height: 30px;
  margin: 15px 15px;
`;
