import { Card } from "./Cards";
import { InfoContainer, Line, UserDataContainer } from "./style";

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

            <Line/>
            
            <InfoContainer direction="column">
                <Card 
                    icone={IoLocationOutline} 
                    iconeAlign="top" 
                    text={props.location}
                    fontSize={1.2}
                />
                <Card 
                    icone={FaRegFolderOpen}
                    iconeAlign="text-top" 
                    value={props.repos} 
                    text=" repositórios"
                    fontSize={1}
                />
            </InfoContainer>

            <InfoContainer direction="row">
                <Card 
                    icone={RiUserFollowLine} 
                    iconeAlign="auto" 
                    value={props.followers} 
                    text=" seguidores ·"
                    fontSize={0.95}
                />
                <Card  
                    value={props.following} 
                    text=" seguindo"
                    fontSize={0.95}
                />
            </InfoContainer>

        </UserDataContainer>
    )
}