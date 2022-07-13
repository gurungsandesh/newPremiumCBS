import React, { useEffect, useState } from 'react'

import Calendar from '../../public/icons/Calender.svg'
import PwdChange from '../../public/icons/Change password.svg'
import Notification from '../../public/icons/Notification.svg'
import Logout from '../../public/icons/Logout.svg'
import User from '../../public/icons/user.svg'
import styled from 'styled-components'
import Image from 'next/image'
import { colors } from '../theme/color'
import { DropDown } from './dropDown'


interface PropsType {
    iconType: "calendar" | "passwordChange" | "notification" | "logout" | "avatar"
}

const RelativeContainer = styled.div`
    position: relative;                         //used for dropdown
`

const ImageContainer = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;

    & :hover {
        filter: invert(52%) sepia(53%) saturate(590%) hue-rotate(103deg) brightness(105%) contrast(88%);
    }
`

const Avatar = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${colors.fontColors.greyOnGreenBack};  
`




function Icons(props: PropsType) {

    const [showDropdown, setShowDropDown] = useState<boolean>(false);

    function changeShow() {
        setShowDropDown(false)
    }

    return (
        <RelativeContainer>
            <ImageContainer onClick={() => { showDropdown ? setShowDropDown(false) : setShowDropDown(true) }} className="scale-in-center" >
                {
                    props.iconType == "calendar" && <Image src={Calendar} alt="icon" width={"100%"} height={"100%"} ></Image>
                }
                {
                    props.iconType == "passwordChange" && <Image src={PwdChange} alt="icon" width={"100%"} height={"100%"}></Image>
                }
                {
                    props.iconType == "notification" && <Image src={Notification} alt="icon" width={"100%"} height={"100%"}></Image>
                }
                {
                    props.iconType == "logout" && <Image src={Logout} alt="icon" width={"100%"} height={"100%"}></Image>
                }
                {
                    props.iconType == "avatar" && (
                        <Avatar>
                            {/* <Image src={User} alt="icon" width={"20px"} height={"20px"} ></Image> */}
                        </Avatar>
                    )
                }

            </ImageContainer>

            {/* {console.log("Drop down is", showDropdown)} */}

            {
                showDropdown &&
                <DropDown
                    showDropDown={showDropdown ? showDropdown : false}
                    onClickOutside={changeShow} />
            }

        </RelativeContainer>
    )
}

export default Icons