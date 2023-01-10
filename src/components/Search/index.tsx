import { SearchButton, SearchContainer, SearchInput } from "./style";
import { FiSearch } from "react-icons/fi";

interface SearchProps {
    user: string,
    setUser: React.Dispatch<React.SetStateAction<string>>,
    searchUser: void
}

export function Search(props: SearchProps){
    return (
        <SearchContainer>

            <SearchInput 
                type='text' 
                value={props.user} 
                onChange={(e) => props.setUser(e.target.value)}
                onKeyUp={(e) => e.code === "Enter" && props.searchUser()}
                placeholder="Digite um usuário..."
                />
            <SearchButton onClick={props.searchUser}>
                <FiSearch/>
            </SearchButton>

        </SearchContainer>
    )
}