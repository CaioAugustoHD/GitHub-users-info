import styled from "styled-components";

export const UserDataContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.main};
`;

interface InfoContainerProps  {
    space: "space-evenly" | "center"
}

export const InfoContainer = styled.div<InfoContainerProps>`
    display: flex;
    justify-content: ${(props: InfoContainerProps) => props.space};
`;
