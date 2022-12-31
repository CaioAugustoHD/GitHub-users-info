import styled from "styled-components";

interface CardContainerProps {
    iconeAlign?: "text-top" | "top" | "auto",
}
export const CardContainer = styled.div<CardContainerProps>`
    border: 1px solid black;
    padding: 10px 0;

    svg {
        vertical-align: ${(props: CardContainerProps) => props.iconeAlign}
    }
`;