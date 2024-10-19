import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1%;
`

export const  NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 42%;
`

export const NavItem = styled(Link)`
    text-decoration: none;
    align-items: center;
    display: flex;
    color: slategray;
`

export const NavItemText =  styled.p``

export const NavIcon = styled.img`
    height: ${props => props.$ht};
    width: ${props => props.$wt};
`

export const NavBtn = styled.button`
    border: none;
    border-radius: 9px;
    height: 40px;
    width: max-content;
    padding: 1%;
    background: slategray;
    color: white;
`

