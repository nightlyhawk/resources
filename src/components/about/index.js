import React from 'react'
import { AboutDetails, AboutHeading, AboutImages, AboutSubSection, AboutText, AboutWrapper } from './style'
import confasset from "../../assets/images/confasset.jpg"

const AboutUs = () => {
  return (
    <AboutWrapper>
        <AboutSubSection>
            <AboutDetails>
                <AboutHeading>About</AboutHeading>
                <AboutText>At Access HR, we are dedicated to helping organizations thrive through effective human resource management. Our goal is to foster a workforce culture that maximizes talent, drives growth, and empowers employees to perform at their best. We believe that the future of human resources lies in embracing innovation, diversity, and flexibility. That’s why we are committed to providing tailored HR solutions that meet the evolving needs of businesses in today's dynamic environment.</AboutText>
            </AboutDetails>
            <AboutImages src={confasset} alt='about'/>
        </AboutSubSection>
        <AboutSubSection>
            <AboutDetails>
                <AboutHeading>Vision Statement</AboutHeading>
                <AboutText>Our vision is to become the leading human resource partner, recognized for empowering organizations through strategic workforce planning, talent development, and fostering a culture of excellence.</AboutText>
            </AboutDetails>
            <AboutDetails>
                <AboutHeading>Mission Statement</AboutHeading>
                <AboutText>At Access HR, our mission is to bridge the gap between businesses and their most valuable asset: their people. We aim to provide cutting-edge HR services that enhance employee satisfaction, boost productivity, and drive organizational success.</AboutText>
            </AboutDetails>
        </AboutSubSection>
    </AboutWrapper>
  )
}

export default AboutUs