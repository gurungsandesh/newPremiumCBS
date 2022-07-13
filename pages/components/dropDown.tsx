import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../theme/color'

interface propTypes {
    showDropDown?: boolean
    onClickOutside?: () => void
    dropDownList?: string[]
    position?: "left" | "right"
}

const DropDownList = ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 6", "Menu 7",]


const ListWrapper = styled.ul`
    list-style: none;
    width: 100%;
    text-align: center;
    
    & > li {
        padding: 0.5rem;
        /* margin: 1rem; */
    }

    & > li:hover {
        border-left: 5px solid ${colors.primaryColors.darkGreen};
        background-color: ${colors.primaryColors.lighterGreen};
    }
`

export const DropDown = (props: propTypes) => {

    //position
    // const [leftOut, setLeft] = useState<boolean>(false)
    const [rightOut, setRight] = useState<boolean>(false)


    //animation to do
    let className = "scale-up-centera";

    var isOutOfViewport = function (elem: HTMLDivElement) {

        // Get element's bounding
        let bounding: DOMRect = elem.getBoundingClientRect();

        // Check if it's out of the viewport on each side
        var out: any = {};
        out.top = bounding.top < 0;
        out.left = bounding.left < 0;
        out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
        out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
        out.any = out.top || out.left || out.bottom || out.right;

        if (out.any) {
            if (out.right) {
                setRight(true);
            }
        }
        return out;
    };

    const DropDownWrapper = styled.div`
    width: 200px;
    height: ${DropDownList.length * 50} + "px";
    background-color: white;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

    position: absolute;
    top: 50px;
    /* left: -88px; */
    /* left: -140px; */
    left: ${rightOut ? "-140px" : "-91px"};
    z-index: 100;

    /* transition: all  cubic-bezier(0.25, 0.46, 0.45, 0.94) both; */

    display: flex;
    flex-direction: column;
    align-items: center;
    `

    const TriangleTip = styled.div`
    width: 0; 
    height: 0; 
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 11px solid white;
    margin-top: -11px;
    margin-left: ${rightOut ? "97px" : null};
    `

    const popUpRef = useRef<HTMLDivElement>(document.createElement("div"));

    useEffect(() => {
        ClickedOutside(props.onClickOutside);
        isOutOfViewport(popUpRef.current);
    }, [props.onClickOutside])

    const ClickedOutside = (handler: any) => {
        document.addEventListener("mousedown", handler)
    }

    return (
        <DropDownWrapper className={className} ref={popUpRef}   >
            <TriangleTip></TriangleTip>
            <ListWrapper >
                {
                    DropDownList.map((val) => (
                        <li
                            key={val}
                            onClick={props.onClickOutside}
                        >
                            {val}
                        </li>
                    ))
                }
            </ListWrapper>
        </DropDownWrapper>
    )
}


