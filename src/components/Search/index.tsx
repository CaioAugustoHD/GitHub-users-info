import { SearchButton, SearchContainer, SearchInput } from "./style";
import { FiSearch } from "react-icons/fi";

export function Search(){
    return (
        <SearchContainer>

            <SearchInput type='text' value='CaioAugustoHD'/>
            <SearchButton type='submit'>
                <FiSearch/>
            </SearchButton>

        </SearchContainer>
    )
}