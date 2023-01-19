import styled  from "styled-components";

export const ProfileContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.main};
    border-radius: 0 0 8px 8px;
`;

export const Avatar = styled.img`
    width: 180px;
    margin: 0.5em;
    filter: drop-shadow(0 0 2px #000)
`;

export const Bio = styled.span`
    margin-bottom: 0.5em;
    text-align: center;
`;

export const UserName = styled(Bio)`
    font-size: 1.6em;
    font-weight: 500;
    color: ${({theme}) => theme.colors.details};
`;
