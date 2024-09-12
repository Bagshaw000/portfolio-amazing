import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Link as ChakraLink, Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <Flex>
        <Flex>
          <ChakraLink as={ReactRouterLink} to="/home">
            Home
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/home">
            Portfolio
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/home">
            Blog
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to="/home">
            Contact
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}
