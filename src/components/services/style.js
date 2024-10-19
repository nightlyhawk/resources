import styled from "styled-components";


export const ServiceSlate = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 380px;
    border: none;
    border-radius: 10px;
    padding: 1%;
    background: slategray;
`

export const ServiceHeading = styled.h1`
    font-size: ${props => props.$sz || "1.5rem" };
    color: ${props => props.$color || "slategray"};
    text-align: center;
`

export const ServiceText = styled.p`
    color: white;
    text-align: center;
`

export const ServiceWrapper = styled.section``

export const ServiceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1%;
`