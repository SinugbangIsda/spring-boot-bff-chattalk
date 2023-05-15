import { FormControl, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { IoSearch } from "react-icons/all";
import { SearchInputProps } from "../../../interfaces";

const SearchInput = ({ onChange, onClick, value, inputRef }: SearchInputProps ) => {
    return (
        <FormControl 
            id = "search" 
            color = "gray.500"
            mr = {{ base: 0, sm: 4 }}
            mb = {{ base: 4, sm: 0 }}
            my = "1"
        >
            <InputGroup width = {{ base: "full" }}>
                <Input 
                    placeholder = "Search"
                    type = "text"
                    bg = "gray.100"
                    color = "black"
                    _placeholder = {{
                        color: "gray.400"
                    }}
                    border = "1px"
                    borderColor = "gray.100"
                    rounded = "md"
                    value = { value }
                    ref = { inputRef }
                    autoComplete = "off"
                    onChange = { onChange }
                />
                <InputRightElement
                    css = {{
                        "WebkitUserSelect": "none",
                        "msUserSelect": "none",
                        "userSelectg": "none",
                    }}
                    onClick = { onClick }
                >
                    <IoSearch />
                </InputRightElement>
            </InputGroup>
        </FormControl>
    )
};

export default SearchInput;