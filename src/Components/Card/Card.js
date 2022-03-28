import React from 'react'
import Styled from 'styled-components'
import './Card.css'
import uslogo from '../../Components/Header/usaidlogo.png'
import {FaCommentAlt, FaThumbsUp, FaAccessibleIcon} from 'react-icons/fa'

function Card() {

  return (
    <>
    <Main>
        <CardHold>
          <Head><Image src={uslogo} className='logo'/>USAID</Head>  
          <About>UNITED STATES DEVELOPMENT FUND
           The aim of our support is based on these core values; Build, Impact and Develop.
           </About>
           <Button>
             <ActionButton><FaCommentAlt/>70Comments </ActionButton>
             <ActionButton1><FaThumbsUp/>101Likes </ActionButton1>
             <ActionButton2><FaAccessibleIcon/>1000Views </ActionButton2>
           </Button>
        </CardHold>
    </Main>
    </>
  )
}

export default Card


const Main= Styled.div`
height: 200px;
width: 100%;
display: flex;
justify-content: center;
`
const CardHold = Styled.div`
height: 200px;
width: 80%;
background-color: aqua;
display: flex;
flex-direction: column;
align-items: center;
`
const Head =  Styled.h2`
color: blue;
display: flex;
justify-content: center;
`
const About = Styled.p`
font-weight: bold;
`
const Button = Styled.div`
width: 100%;
justify-content; space-between;
`
const ActionButton = Styled.button`
border-radius: 5px;
margin: 0 5px;
padding: 4px 10px;
border: 1px solid #fff;
svg{
  transfrom: translateY(2px);
  margin-right: 5px;
}
background: rgba(155,155,155,0);
color: #fff;
cursor: pointer;
`
const ActionButton1 = Styled.button`
border-radius: 5px;
margin: 0 5px;
padding: 4px 10px;
border: 1px solid #fff;
svg{
  transfrom: translateY(2px);
  margin-right: 5px;
}
background: rgba(155,155,155,0);
color: #fff;
cursor: pointer;
`
const ActionButton2 = Styled.button`
border-radius: 5px;
margin: 0 5px;
padding: 4px 10px;
border: 1px solid #fff;
svg{
  transfrom: translateY(2px);
  margin-right: 5px;
}
background: rgba(155,155,155,0);
color: #fff;
cursor: pointer;
`
const Image = Styled.img`
height: 50px;
`