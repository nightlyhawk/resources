import styled from "styled-components";


export const FooterWrapper = styled.section`
    background: slategray;
    display: flex;
    flex-wrap: wrap;
    padding: 4%;
`

export const FooterHeading = styled.h1``

export const FooterText = styled.p``

export const FooterContainer = styled.div`
    width: ${props => props.$wt || "40%"};
    display: flex;
    flex-direction: ${props => props.$dir || "column"};
    color: white;
`

export const FooterList = styled.ul`
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const FooterListItem = styled.li`
    cursor: pointer;
`