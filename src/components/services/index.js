import React from 'react'
import { ServiceContainer, ServiceHeading, ServiceWrapper } from './style'
import { servicedata } from '../../data/service'
import ServiceCard from './card'

const Services = () => {
  return (
    <ServiceWrapper>
        <ServiceHeading $sz="2.5rem" >Services</ServiceHeading>
        <ServiceContainer>
            {servicedata.map((item, index) => (
                <ServiceCard heading={item.title} text={item.text} key={index} />
            ))}
        </ServiceContainer>
    </ServiceWrapper>
  )
}

export default Services