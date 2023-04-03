import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";


type SearchInputProps = {
};

const SearchInput:React.FC<SearchInputProps> = () => {
      return (
        <Flex>
        <InputGroup>
                <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.400' />}
        />
                <Input 
                        placeholder='Search Reddit'
                        fontSize='10pt'
                        _placeholder={{ color: 'gray.500' }}
                        _hover={{
                                bg: 'white',
                                border: '1px solid',
                                borderColor: 'blue.500',
                        }}
                        _focus={{
                                outline: 'none',
                                border: '1px solid',
                                borderColor: 'blue.500',
                        }}



        />
        </InputGroup>
        </Flex>

      );
};

export default SearchInput
