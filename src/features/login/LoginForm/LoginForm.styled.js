import { Button, Grid } from "@mui/material";
import styled, { css } from "styled-components";
import {Field,ErrorMessage} from 'formik';




export const FormContentStyled = styled(Grid).attrs(()=>({
    // container:true,
    // spacing:1,
}))`
    width: 70%;
    height: 411px;
    position: absolute;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
    display: flex;
    background-color:${({ theme }) => theme.colors.darkBlue_2} ;
`

export const FormColStyled = styled(Grid).attrs(()=>({
    item:true,
    md:6
}))`
    display:flex;
    flex-direction:${({row})=> row ? "row" : "column"} !important;
    padding:${({ theme }) => theme.boxModel.padding.normal};
    background-color:${({ theme,bg }) => bg && theme.colors.white} ;
    justify-content:center;
    align-items:center;
`


export const FormInput = styled(Field)`
    width: 318px;
    height: 50px;
    background:${({ theme})=> theme.colors.darkBlue_4} !important;
    color:${({ theme})=> theme.colors.grayText} !important;
    padding:${({ theme})=> theme.boxModel.padding.small};
    margin-top:${({ theme})=> theme.boxModel.margin.normal};
    font-size:${({ theme})=> theme.font.size.medium};
    text-decoration: capitalize;
    outline: none;
    border-radius: 4px;
    border:none;
`


export const FormSubmit = styled(Button).attrs(()=>({
    variant:"contained",
    type:"submit"
}))`
    ${({theme})=>css`
    width: 100%;
    height: 50px;
    background-color: ${theme.colors.lightPurple_3} !important;
    margin: ${theme.boxModel.margin.large} 0 !important;
    font-size: ${theme.font.size.medium};
    text-transform: lowercase !important;
    font-size:25px !important;
    &:hover{
        background-color: ${theme.colors.lightPurple_2} !important;
    }

    `}
`

export const FormInputError = styled(ErrorMessage)`
    color: ${({theme})=>theme.colors.lightPurple_3} ;
` 