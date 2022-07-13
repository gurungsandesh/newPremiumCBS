import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { borderRadius } from '../theme/constant'

import searchIcon from '../../public/icons/Searchicon.svg'
import { colors } from '../theme/color'


const SearchBox = styled.div`
    width: 20rem;
    height: 2rem;
    border-radius: ${borderRadius};

    display: flex;
    justify-content: space-between;
    border: 0.856561px solid rgba(0, 0, 0, 0.04);
    border: 0.8px solid rgba(0,0,0,0.04);
`

const Input = styled.input`
    border: none;
    width: inherit;
    background: #F4F4F4;
    border-radius: ${borderRadius};
    font-size: 0.8rem;
    padding: 0.5rem !important;
    
    &:focus {
        outline: none;
    }
    ::placeholder {
        color: ${colors.fontColors.greyOnGreyBack};
        opacity: 1;
        font-weight : 300;
        font-style: italic;
    }
    `
const SearchButton = styled.button`
    width: 2rem ;
    border: none;
    border-radius: ${borderRadius};
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #F4F4F4;
`
function SearchBar() {
    return (
        <SearchBox >
            <Input type={"text"} placeholder="Type here to search" />
            <SearchButton>
                <Image src={searchIcon} height="20px" width={"20px"} alt={"Search"}></Image>
            </SearchButton>
        </SearchBox>
    )
}

export default SearchBar