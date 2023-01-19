import styled from "styled-components";

export const FooterContainer = styled.section`
    background-color: ${({theme}) => theme.colors.main};
    padding: 1.5em 0;
    display: flex;
    justify-content: center;
    border-radius: 0 0 8px 8px;
`;

export const GotoProfileLink = styled.a`
    text-decoration: none;
    background-color: #FFF;
    padding: 7px 12px;
    border-radius: 9px;
    background-color: ${({theme}) => theme.colors.details};
    color: ${({theme}) => theme.colors.body};
    cursor: pointer;
    transition: all 200ms ease;

    :hover {
        background-color: ${({theme}) => theme.colors.inside};
        color: ${({theme}) => theme.colors.text};
    }

`;