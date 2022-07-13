import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

import slashedEye from '../../../public/icons/eye-slash-solid.svg'
import Eye from '../../../public/icons/eye-solid.svg'
import { colors } from '../../theme/color'


interface propTypes {
    type: "text" | "email" | "password" | "checkbox"
    placeHolder?: string
    label?: string
}


const InputWrapper = styled.div`
    position: relative;

    display: flex;
    /* justify-content: center; */
    align-items: center;

    & > input[type=checkbox] {
        /* align-self : flex-start ; */
    }
`

const IconWrapper = styled.div`
    position: absolute ;
    top: 10px;
    left: 267px;
    cursor: pointer;

    height: 20px;
    width: 23px;
    filter: invert(83%) sepia(0%) saturate(459%) hue-rotate(185deg) brightness(107%) contrast(85%);
    `
const LabelWrapper = styled.span`
    color: ${colors.fontColors.grey};
    font-size: 0.9rem;
`

const InputText = styled.input`
    float: right;
    border: 3px solid #D4D4D4;
    outline: none;
    width: ${props => props.type == "checkbox" ? "14px" : "300px"};
    /* width: 300px; */
    height: 37px;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0.5rem;

    cursor: ${props => props.type == "checkbox" && "pointer"};

    &:focus {
        border: 3px solid #6DB254;
    }

    `


export const Input = (props: propTypes) => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <InputWrapper className={props.type}>
            <InputText type={passwordShown ? "text" : props.type} placeholder={props.placeHolder} />
            {props.type === "checkbox" && <LabelWrapper>{props.label}</LabelWrapper>}
            <IconWrapper>{props.type === "password" && <Image src={passwordShown ? slashedEye : Eye} alt="Logo" onClick={togglePassword} />}</IconWrapper>
        </InputWrapper>
    )
}