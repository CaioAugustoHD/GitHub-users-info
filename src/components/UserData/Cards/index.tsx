import { IconType } from "react-icons/lib";
import { CardContainer } from "./style";

export interface CardProps {
    icone?: IconType,
    iconeAlign?: "text-top" | "top" | "auto",
    value?: number,
    text: string
}

export function Card(props: CardProps) {
    return (
        <CardContainer iconeAlign={props.iconeAlign}>

            {props.icone && <props.icone/>}
            <span>{props.value}</span>
            <span>{props.text}</span>

        </CardContainer>
    )
}