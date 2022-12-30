import { Avatar, Bio, ProfileContainer, UserName } from "./style";

interface ProfileProps {
    avatar: string,
    name: string,
    bio: string
}

export function Profile(props: ProfileProps){
    return (
        <ProfileContainer>

            <Avatar src={props.avatar} />
            <UserName>{props.name}</UserName>
            <Bio>{props.bio}</Bio>

        </ProfileContainer>
    )
}