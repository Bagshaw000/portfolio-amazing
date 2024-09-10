import { Box, Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

// import React from "react";

function Header() {
  return (
    <Box>
      <Flex >
        <Flex>
          <ChakraLink  as={ReactRouterLink} to="/home">
            Home
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/portfolio">
            Portfolio
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/blog">
            Blog
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/contact">
            Contact
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
