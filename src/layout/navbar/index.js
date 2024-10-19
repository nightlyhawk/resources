import React from 'react'
import { NavBtn, NavContainer, NavIcon, NavItem, NavWrapper } from './style'
import logo from "../../assets/icons/logo.svg"
import arrowdown from "../../assets/icons/arrowdown.svg"


const NavBar = () => {
  return (
    <NavWrapper>
        <NavItem to={"/"}>
            <NavIcon $ht="40px"  $wt="136px" src={logo} />
        </NavItem>
        <NavContainer>
            <NavItem to={""}>Products <NavIcon src={arrowdown} /></NavItem>
            <NavItem to={""}>About us <NavIcon src={arrowdown} /></NavItem>
            <NavItem to={""}>Contact us <NavIcon src={arrowdown} /></NavItem>
            <NavItem to={""}>Pricing <NavIcon src={arrowdown} /></NavItem>
        </NavContainer>
        <NavBtn>Request Demo</NavBtn>
    </NavWrapper>
  )
}

export default NavBar