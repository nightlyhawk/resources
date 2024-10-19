import React from 'react'
import { FooterContainer, FooterHeading, FooterText, FooterWrapper } from './style'
import { companydata, resourcedata, productdata } from '../../data/footer'
import List from './list'

const Footer = () => {
  return (
    <FooterWrapper>
        <FooterContainer>
            <FooterHeading>ACCESSHR</FooterHeading>
            <FooterText>Streamline your recruitment with easy access to top talents around the globe with a single click</FooterText>
        </FooterContainer>
        <FooterContainer $dir="row" $wt="50%">
            <List data={productdata} />
            <List data={companydata} />
            <List data={resourcedata} />
        </FooterContainer>
        <FooterContainer>
            <FooterText>Copyright © accesshr 2024, All Rights Reserved</FooterText>
        </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer