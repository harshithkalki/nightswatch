import { Heading, HStack , useMediaQuery , Flex, useColorMode, IconButton } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun , } from "react-icons/fa";

const Header = () => {
    const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)")

    const {colorMode,toggleColorMode}=useColorMode();
    const isDark=colorMode==="dark";
  
    return (
        <HStack pt="3"   pb="2vh" px='100'  >
            <Flex justifyContent="space-between" w="100%" >
             <Heading>NIGHTSWATCH-WIKI</Heading>
             <IconButton icon={isDark?<FaSun />:<FaMoon />} isRound="true" onClick={toggleColorMode} ml={isNotSmallerScreen?"2vw":"3vw"} ></IconButton>
            </Flex>
        </HStack>
    )
}
export default Header;