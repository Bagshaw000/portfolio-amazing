import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Link as ChakraLink, Flex, Spacer } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      
      w={{'2xl':"100vw"}}
      h="60vw"
      bgImage="url('../src/assets/bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      transform="rotateY(180deg)"
      p="3% 5%"
    >
      <Flex justifyContent="end" transform="rotateY(180deg)">
        <Flex w="30vw" color="white">
          <Box>
            <ChakraLink as={ReactRouterLink} to="/">
              Home
            </ChakraLink>
          </Box>
          <Spacer />
          <Box>
            <ChakraLink as={ReactRouterLink} to="/">
              Portfolio
            </ChakraLink>
          </Box>
          <Spacer />
          <Box>
            <ChakraLink as={ReactRouterLink} to="/">
              Blog
            </ChakraLink>
          </Box>
          <Spacer />
          <Box>
            <ChakraLink as={ReactRouterLink} to="/">
              Contact
            </ChakraLink>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
