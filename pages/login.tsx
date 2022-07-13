import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import premiumLogo from '../public/premium_logo.png'
import Button from './components/formFields/button'
import { Input } from './components/formFields/input'
import { colors } from './theme/color'

const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

`

const LoginCard = styled.div`
    width: 50vw;
    height: 70vh;
    box-shadow:  rgba(0, 0, 0, 0.24) 0px 3px 8px ;

    display: flex;

    & > div:first-child {
        width: 50%;

        background-color: #A4CA96;
        position: relative;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > img {
            display: none;
        }
    }

    
    & > div:last-child {
        width: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > span {
            width: 80%;
            margin-top: -1rem;
            margin-bottom: 2rem;
            font-size: 0.9rem;

            color: ${colors.fontColors.grey};
        }

        //hard coded 
        & > .checkbox  {
            margin-left: -135px;
        }

        & > div {
            margin: 0.3rem 0rem;
        }
    }   
`

const SignUp = styled.div`

    & > span {
        color: ${colors.fontColors.grey};
    }
    & > a {
        font-weight: bold;
        color: #6DB254
    }
    
`

const Circle1 = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #6DB254;

    position: absolute;
    top: 130px;
    left: -80px;
`
const Circle2 = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #6DB254;

    position: absolute;
    top: 10px;
    left: 380px;
`
const Circle3 = styled.div`
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background-color: #6DB254;

    position: absolute;
    top: 420px;
    left: 240px;
`
const WhiteLogoContainer = styled.div`
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(207deg) brightness(108%) contrast(101%);
`
const LogoContainer = styled.div`
  
`


function Login() {
    return (
        <LoginContainer>
            <LoginCard>
                <div>
                    <Circle1></Circle1>
                    <Circle2></Circle2>
                    <Circle3></Circle3>
                    <WhiteLogoContainer>
                        <Image src={premiumLogo} width="120px" height={"50px"} alt="Logo" />
                    </WhiteLogoContainer>
                </div>
                <div>
                    <LogoContainer>
                        <Image src={premiumLogo} width="120px" height={"50px"} alt="Logo" />
                    </LogoContainer>
                    <h3>CBS Premium</h3>
                    <span>Here will be the short intro about the product that we develop for our customers</span>
                    <Input type='text' placeHolder='User name' />
                    <Input type='password' placeHolder='Password' />
                    <Input type='checkbox' label='Remember my account' />
                    <Button label='Login' width={"70%"} height={"40px"}></Button>
                    <SignUp>
                        <span>Dont Have Account yet? </span>
                        <a href='#'>Sign Up</a>
                    </SignUp>
                </div>
            </LoginCard>
        </LoginContainer>
    )
}

export default Login