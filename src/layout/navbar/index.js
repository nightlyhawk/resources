import React, { useState } from 'react'
import { NavBtn, NavContainer, NavIcon, NavItem, NavSub, NavWrapper } from './style'
import logo from "../../assets/icons/logo.svg"
import arrowdown from "../../assets/icons/arrowdown.svg"
import burger from "../../assets/icons/burger.svg"


const NavBar = () => {
    const [see, setSee] = useState(false);

  return (
    <NavWrapper>
        <NavItem to={"/"}>
            <NavIcon $ht="40px"  $wt="136px" src={logo} />
        </NavItem>
        <NavSub $seen={see}>
            <NavContainer>
                <NavItem to={""}>Products <NavIcon src={arrowdown} /></NavItem>
                <NavItem to={""}>About us <NavIcon src={arrowdown} /></NavItem>
                <NavItem to={""}>Contact us <NavIcon src={arrowdown} /></NavItem>
                <NavItem to={""}>Pricing <NavIcon src={arrowdown} /></NavItem>
            </NavContainer>
            <NavBtn>Request Demo</NavBtn>
        </NavSub>
        <NavIcon src={burger} alt='menu' $control={"none"} onClick={() => setSee(!see)}/>
    </NavWrapper>
  )
}

export default NavBar