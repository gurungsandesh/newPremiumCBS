import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'
import Img from '../public/corporate_logo.png'
import Icons from './components/icons';
import SearchBar from './components/searchBar';
import SideAppBarMenuList from './components/sideAppBarMenuList';
import { colors } from './theme/color';
import { font } from './theme/font';
import premiumLogo from '../public/premium_logo.png'
import LandingImg from '../public/icons/landing page image.svg'
import { borderRadius } from './theme/constant';
import { Card } from './components/Card';


// import LandingPageCTA from './components/LandingPageCTA';

const BodyDiv = styled.div`
        height: 100vh;
        width: 100%;
        background-color: #F8F8F8;

         *{
            margin: 0;
            padding: 0;
            font-family: ${font.fontFamily} ;
         }

    `
const SideBar = styled.div`
        position: absolute;
        width: 218.67px;
        height: 100vh;
        /* left: 49px;
        top: 84px; */
        box-shadow: 5.125px 0px 15.375px rgba(0, 0, 0, 0.06);
        background-color: white;
    `;

const CorporateLogo = styled.div`
        height: 19vh;
        display: flex;
        flex-direction: column;
        justify-content : center ;
        align-items: center;
        text-align: center;
        font-size: 10.2px;
        font-weight: bold;
        color: ${colors.fontColors.greenLogo};
    `

const TopBar = styled.div`
        position: absolute;
        width: 100%;
        height: 58px;
        /* margin-left: 17%; */
        padding-left: 17%;
        padding-right: 2%;

        /* position: fixed; */
        /* z-index: 100 ; */

        display: flex;
        justify-content: space-between;
        align-items: center;

        background: #ffffff;
    `;

const IconWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: red; */
    width: 15vw;
`

const PremiumLogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: red; */

    & > span {
        font-size: 10.5px;
        color: #808080;
        margin-right: 0.5rem;
    }
`

const BodyContainer = styled.div`
    width: 80%;
    height: 80vh;
    overflow: auto;
    position: relative;
    top: 6rem;
    left: 16.4rem;
`

const LandingPageCTA = styled.div`
    width: 100%;
    height: 130px;
    border-radius: ${borderRadius};
    background-color: ${colors.primaryColors.lighterGreen};
    padding: 1rem 5rem 1rem 4rem;  

    display: flex;
    justify-content: space-between;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        & :first-child {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
            font-size: 1.2rem;
            letter-spacing: 0.01rem;
            color: ${colors.fontColors.greenLogo};
            
        }
        
        & :last-child {
            width: 40vw;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0.01rem;
            font-size: 0.9rem;
            color: ${colors.fontColors.greyOnGreenBack};
            /* display: none; */
        }
    }
    
`
const LandingPageImageWrapper = styled.div`
    /* background-color: red; */
    /* height: 250px; */
    width: 240px;
    margin-top: -60px;
`

const BreadCrumb = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0.5rem;

    & :first-child {
        font-weight: 500;
        color: ${colors.fontColors.pureBlack};
        letter-spacing: 0.01em;
    }
    
    & :last-child {
        color: ${colors.fontColors.grey};
        letter-spacing: 0.01em;       
        font-weight: 400;
    }
`



function Layout() {


    return (
        <BodyDiv>

            <TopBar>
                <SearchBar />
                <IconWrapper>
                    <Icons iconType='notification' ></Icons>
                    <Icons iconType='calendar' ></Icons>
                    <Icons iconType='passwordChange' ></Icons>
                    <Icons iconType='logout' ></Icons>
                    <Icons iconType='avatar' ></Icons>
                </IconWrapper>
            </TopBar>

            <SideBar>
                <CorporateLogo >
                    <Image src={Img} height={"42px"} width={"40px"} alt='Logo'></Image>
                    <span>Swarna Laxmi Savings & Credit Cooperative Society Ltd.</span>
                </CorporateLogo>
                <SideAppBarMenuList />

                <PremiumLogoWrapper>
                    <span>Powered By:</span>
                    <Image src={premiumLogo} alt="logo" />
                </PremiumLogoWrapper>

            </SideBar>

            < BodyContainer>
                <BreadCrumb>
                    <span>Dashboard</span>
                    <span>2023/02/21</span>
                </BreadCrumb>
                <LandingPageCTA>
                    <div>
                        <span>Welcome Back mBank !</span>
                        <span>From your dashboard see infographics and data of your institution or Organization for the ease of your management. </span>
                    </div>
                    <LandingPageImageWrapper>
                        <Image src={LandingImg} alt="Image" width={"220px"} height={"130px"} />
                    </LandingPageImageWrapper>
                </LandingPageCTA>

                {/* todo */}
                <Card cardType='small'></Card>

                <br />
            </BodyContainer>

        </BodyDiv>
    )
}

export default Layout