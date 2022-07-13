
import { height, width } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { borderRadius } from '../theme/constant'

interface propTypes {
    cardType: "small" | "mediumCard" | "largeCard" | "largerCard"
}

const sizes = {
    small: {
        height: "126px",
        width: "180px"
    },
    mediumCard: {
        height: "277px",
        width: "392px"
    },
    largeCard: {
        height: "278px",
        width: "600px"
    },
    largerCard: {
        height: "295px",
        width: "1026px"
    },
}


export const Card = (props: propTypes) => {

    let cardType = props.cardType

    console.log("card type is ", cardType);

    const [cardWidth, setCardWidth] = useState<string>("")
    const [cardHeight, setCardHeight] = useState<string>("")


    const init = (cardType: string) => {
        if (cardType == "small") {
            setCardHeight(sizes.small.height);
            setCardWidth(sizes.small.width);
        } else if (cardType == "mediumCard") {
            setCardHeight(sizes.mediumCard.height);
            setCardWidth(sizes.mediumCard.width);
        } else if (cardType == "largeCard") {
            setCardHeight(sizes.largeCard.height);
            setCardWidth(sizes.largeCard.width);
        } else if (cardType == "largerCard") {
            setCardHeight(sizes.largerCard.height);
            setCardWidth(sizes.largerCard.width);
        }
    }

    useEffect(() => {
        init(cardType)
    }, [])



    const CardContainer = styled.div`
        height: ${cardHeight} ;
        width: ${cardWidth};
        border-radius: ${borderRadius};
        background-color: white;

        margin-top: 50px;
    `

    return (
        <CardContainer>

        </CardContainer>
    )
}