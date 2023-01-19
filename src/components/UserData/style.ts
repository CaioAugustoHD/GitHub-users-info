import styled from "styled-components";

export const UserDataContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.main};
`;

interface InfoContainerProps  {
    direction: "row" | "column"
}

export const InfoContainer = styled.div<InfoContainerProps>`
    display: flex;
    flex-direction: ${(props: InfoContainerProps) => props.direction};
    justify-content: center;
    align-items: center;
`;

export const Line = styled.hr`
    width: 80%;
    margin: 0.7em auto;
    border: 1px solid ${({theme}) => theme.colors.details}
`;
