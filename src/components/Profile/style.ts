import styled  from "styled-components";

export const ProfileContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.main};
`;

export const Avatar = styled.img`
    width: 190px;
    margin: 0.5em;
`;

export const Bio = styled.span`
    margin-bottom: 0.5em;
`;

export const UserName = styled(Bio)`
    font-size: 1.5em
`;
