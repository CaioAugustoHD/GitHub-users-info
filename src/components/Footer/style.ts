import styled from "styled-components";

export const FooterContainer = styled.section`
background-color: ${({theme}) => theme.main};
    padding: 1.5em 0;
    display: flex;
    justify-content: center;
`;

export const GotoProfileLink = styled.a`
    text-decoration: none;
    background-color: #FFF;
    padding: 7px 12px;
    border-radius: 9px;
`;