import React from "react";
import * as S from "./projectBtn.style";

const ProjectBtn = ({text, url}) => {
    return(<S.Link href={url}>{text}</S.Link>)
}

export default ProjectBtn;