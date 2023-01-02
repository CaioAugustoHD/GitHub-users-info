import { Card } from "./Cards";
import { InfoContainer, UserDataContainer } from "./style";

import { FaRegFolderOpen } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiUserFollowLine } from "react-icons/ri";
 
interface UserDataProps {
    repos: number,
    location: string,
    followers: number,
    following: number
}

export function UserData(props: UserDataProps) {
    return (
        <UserDataContainer>
            
            <InfoContainer space="space-evenly">
                <Card icone={FaRegFolderOpen} iconeAlign="text-top" value={props.repos} text=" repositórios"/>
                <Card icone={IoLocationOutline} iconeAlign="top" text={props.location}/>
            </InfoContainer>

            <InfoContainer space="center">
                <Card icone={RiUserFollowLine} iconeAlign="auto" value={props.followers} text=" seguidores ·"/>
                <Card  value={props.following} text=" seguindo"/>
            </InfoContainer>

        </UserDataContainer>
    )
}