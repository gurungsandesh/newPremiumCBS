import React from 'react'
import styled from 'styled-components'

interface propsTypes {
    label: string
    height?: number | string
    width?: number | string
}

function Button(props: propsTypes) {

    const ButtonWrapper = styled.button`
        height: ${props.height};
        width: ${props.width}; 
        border-radius: 5px;
        
        font-size: 1.2rem;
        font-weight: bold;
        background-color: #6DB254;
        color: white;
        cursor: pointer;
        outline: none; 
        border: none;
    `

    return (
        <ButtonWrapper>
            {props.label}
        </ButtonWrapper>
    )
}

export default Button