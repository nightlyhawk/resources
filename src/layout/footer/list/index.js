import React from 'react'
import { FooterHeading, FooterList, FooterListItem } from '../style'

const List = ({data}) => {
  return (
    <FooterList>
        {data.map((item, index) => (
            <>
                {index === 0?
                    <FooterHeading>{item}</FooterHeading>
                    :
                    <FooterListItem>{item}</FooterListItem>
                }
            </>
        ))}
    </FooterList>
  )
}

export default List