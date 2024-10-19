import React from 'react'
import { ServiceHeading, ServiceSlate, ServiceText } from '../style'

const ServiceCard = ({heading, text}) => {
  return (
    <ServiceSlate>
        <ServiceHeading $color="white" >{heading}</ServiceHeading>
        <ServiceText>{text}</ServiceText>
    </ServiceSlate>
  )
}

export default ServiceCard