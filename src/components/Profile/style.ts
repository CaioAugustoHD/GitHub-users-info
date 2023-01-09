import styled  from "styled-components";

export const ProfileContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.main};
    border-radius: 0 0 8px 8px;
`;

export const Avatar = styled.img`
    width: 190px;
    margin: 0.5em;
`;

export const Bio = styled.span`
    margin-bottom: 0.5em;
`;

export const UserName = styled(Bio)`
    font-size: 1.6em;
    font-weight: 500;
    color: ${({theme}) => theme.details};
`;
