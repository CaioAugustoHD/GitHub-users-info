import { FooterContainer, GotoProfileLink } from "./style";

interface FooterProps {
    url: string
}

export function Footer(props: FooterProps) {
    return (
        <FooterContainer>

            <GotoProfileLink href={props.url} target="_blank">Visitar perfil</GotoProfileLink>

        </FooterContainer>
    )
}