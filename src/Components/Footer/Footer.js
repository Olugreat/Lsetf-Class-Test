import React from 'react'
import {
    MainCon,
    Row,
    Column,
    Head,
    Head1,
    Head2,
    Footerlink,
} from './FooterStyle';


function Footer() {

  return (
    <MainCon>
        <Row>
            <Column>
            <Head>ABOUT US</Head>
            <Footerlink href='#'>Aim</Footerlink>
            <Footerlink href='#'>Vision</Footerlink>
            <Footerlink href='#'>Mission</Footerlink>
            </Column>
            <Column>
            <Head1>SERVICES</Head1>
            <Footerlink href='#'>Project Management</Footerlink>
            <Footerlink href='#'>Business Development</Footerlink>
            <Footerlink href='#'>Technology Procurement</Footerlink>
            </Column>
            <Column>
            <Head2>CONTACT US</Head2>
            <Footerlink href='#'>Calabar</Footerlink>
            <Footerlink href='#'>Warri</Footerlink>
            <Footerlink href='#'>Togo</Footerlink>
            </Column>
        </Row>
    </MainCon>
  )
}

export default Footer

