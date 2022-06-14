import React from "react";
import styled from "styled-components";
import * as S from "./styled";
import Repositories from "../Repositories";
import useGithub from "../../Hooks/github-hooks";

const RepositoryItem = ({name, linkToRepo, fullName}) => {
    return (
        <S.Wrapper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
            <S.WrapperFullName>full name:</S.WrapperFullName>
            <S.WrapperLink href={"linkToRepo"} target= "_blank" rel= "noreferrer">
            {fullName}
            </S.WrapperLink>
        </S.Wrapper>
    );
};

export default RepositoryItem;
