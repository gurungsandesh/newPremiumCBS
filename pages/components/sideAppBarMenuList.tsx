import React, { useId } from 'react'
import styled from 'styled-components'
import { colors } from '../theme/color';
import { borderRadius } from '../theme/constant';

// icons
import Account from '../../public/icons/Account.svg'
import Admin from '../../public/icons/Admin.svg'
import Dashboard from '../../public/icons/dashboard.svg'
import Deposit from '../../public/icons/Deposits.svg'
import FrontDesk from '../../public/icons/Front Desk.svg'
import Loan from '../../public/icons/Loan.svg'
import Reports from '../../public/icons/reports.svg'
import Settings from '../../public/icons/settings.svg'
import SystemSettings from '../../public/icons/SystemSettings.svg'
import Teller from '../../public/icons/Teller.svg'
import Image from 'next/image';



function SideAppBarMenuList() {

    const menuList = [
        { name: "Account and Finance", icon: Account },
        { name: "Dashboard", icon: Dashboard },
        { name: "Settings", icon: Settings },
        { name: "Front Desk", icon: FrontDesk, },
        { name: "Teller", icon: Teller },
        { name: "Deposit", icon: Deposit },
        { name: "Loan", icon: Loan },
        { name: "System Settings", icon: SystemSettings },
        { name: "Admin", icon: Admin },
        { name: "Meeting Reports", icon: Reports },
    ]

    const MenuList = styled.div`
        width: 100%;
        height: 70vh;
    `
    const List = styled.ul`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        list-style: none;
        text-align: center;
        li {
            width: 95%;
            height: 2.8rem;
            font-weight: 500;
            font-size: 12px;
            color: ${colors.fontColors.sidebarMenu};
            border-radius: ${borderRadius};
            padding-left: 1.8rem;

            display: flex;
            justify-content: flex-start;
            align-items: center;

            border-left: 0px solid ${colors.primaryColors.darkGreen};
            transition: border 0.5s ease;

            span {
            margin-left: 0.8rem;
            }

        }
        li:hover {
            color: ${colors.fontColors.greenLogo};
            border-left-width: 6px;
            background-color: #e8fff3;
        }  
        li:hover > div {
            /* display: none; */
            filter: invert(52%) sepia(53%) saturate(590%) hue-rotate(103deg) brightness(105%) contrast(88%);
        }  
    `

    return (
        <>
            <MenuList>
                <List>
                    {menuList.map((menu, index) => (
                        <li key={index}>
                            <div>
                                <Image src={menu.icon} width="20px" height="19px" alt='icon' />
                            </div>
                            <span>
                                {menu.name}
                            </span>
                        </li>
                    ))}
                </List>
            </MenuList>
        </>
    )
}

export default SideAppBarMenuList