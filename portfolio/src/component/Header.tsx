import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w={{ base: "100vw", md: "100vw" }}
      h={{ base: "70vh", md: "70vh" }}
      bgImage="url('../src/assets/bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      transform="rotateY(180deg)"
      bgColor="black"
      p="3% 5%"
      sx={{ fontFamily: "heading" }}
    >
      <Flex
        justifyContent="end"
        transform="rotateY(180deg)"
        display={{ base: "none", md: "flex" }}
      >
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

      <Button
        display={{ base: "block", md: "none" }}
        // m="0px 0px 0px 85vw"
        onClick={onOpen}
      >
        <HamburgerIcon color="white" h="10" w="10" />
      </Button>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        colorScheme="white"
        isFullHeight={true}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            w="100vw"
            paddingTop="50px"
            h="10vh"
            color="white"
            backgroundColor="#5A2CDA"
          />
          <DrawerBody
            color="white"
            w="100vw"
            h="100vh"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            paddingTop="5vh"
            paddingBottom="60vh"
            fontSize="1.5rem"
            backgroundColor="#5A2CDA"
          >
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Stack color= 'white' w='30vw'  transform="rotateY(180deg)" textAlign='right' >
        <Text fontSize='1rem' fontWeight='100'>Based in</Text>
        <Text fontSize='1.2rem' fontWeight='300'>River state, NG </Text>
      </Stack>
    </Box>
  );
}
