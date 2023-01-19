import styled from "styled-components";

export const Container = styled.main`

    background-color: ${({theme}) => theme.colors.main};
    width: min(50%, 520px);
    margin: auto;
    border: 2px solid ${({theme}) => theme.colors.details};
    border-radius: 10px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;