import { Card } from "./Cards";
import { InfoContainer, UserDataContainer } from "./style";

import { FaRegFolderOpen } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiUserFollowLine } from "react-icons/ri";

export function UserData() {
    return (
        <UserDataContainer>
            
            <InfoContainer space="space-evenly">
                <Card icone={FaRegFolderOpen} iconeAlign="text-top" value={0} text="repositórios"/>
                <Card icone={IoLocationOutline} iconeAlign="top" value={0} text="São Bento do Sapucaí,SP,Brazil"/>
            </InfoContainer>

            <InfoContainer space="center">
                <Card icone={RiUserFollowLine} iconeAlign="auto" value={0} text="seguidores · "/>
                <Card  value={0} text="seguindo"/>
            </InfoContainer>

        </UserDataContainer>
    )
}