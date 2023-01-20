import styled from "styled-components";

interface CardContainerProps {
    iconeAlign?: "text-top" | "top" | "auto",
    fontSize: number
}
export const CardContainer = styled.div<CardContainerProps>`
    padding: 0.5em 0;
    font-size: ${(props: CardContainerProps) => props.fontSize}em;

    svg {
        vertical-align: ${(props: CardContainerProps) => props.iconeAlign};
        color: ${({theme}) => theme.colors.details}
    }
`;

export const TextSpan = styled.span`
    color: ${({theme}) => theme.colors.text}
`;

export const ValueSpan = styled(TextSpan)`
    margin-left: 4px;
`;