import styled from "styled-components";

export const SearchContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5em 0;
    background-color: ${({theme}) => theme.main};
    border-radius: 10px 10px 0 0;
`;

export const SearchInput = styled.input`
    width: 70%;
    padding: 5px 11px 7px;
    font-size: 15px;
    border-radius: 9px 0 0 9px;
    border: 0;
`;

export const SearchButton = styled.button`
    padding: 7px 11px 5px;
    border-radius: 0 9px 9px 0;
    border: 0;
    background-color: ${({theme}) => theme.details};
    color: ${({theme}) => theme.body};
    cursor: pointer;
    transition: all 200ms ease;

    :hover {
        background-color: ${({theme}) => theme.inside};
        color: ${({theme}) => theme.text};
    }
`;