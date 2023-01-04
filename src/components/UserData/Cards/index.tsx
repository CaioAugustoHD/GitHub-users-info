import { IconType } from "react-icons/lib";
import { CardContainer, TextSpan, ValueSpan } from "./style";

export interface CardProps {
    icone?: IconType,
    iconeAlign?: "text-top" | "top" | "auto",
    value?: number,
    text: string,
    fontSize: number
}

export function Card(props: CardProps) {
    return (
        <CardContainer iconeAlign={props.iconeAlign} fontSize={props.fontSize}>

            {props.icone && <props.icone/>}
            <ValueSpan>{props.value}</ValueSpan>
            <TextSpan>{props.text}</TextSpan>

        </CardContainer>
    )
}