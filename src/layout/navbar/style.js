import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1%;
    position: relative;
`
export const NavSub = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;

    @media screen and (max-width: 800px){
        display: ${props => props.$see? "flex" : "none"};
        flex-direction: column;
        width: 40%;
        gap: 3rem;
        border: none;
        border-radius: 10px;
        padding: 1%;
        position: absolute;
        box-shadow: 1px 0 1px slategray;
    }
`
export const  NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 54%;
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
    display: ${props => props.$control || "block"};
    @media screen and (max-width: 800px){
        display: block;
    }

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

