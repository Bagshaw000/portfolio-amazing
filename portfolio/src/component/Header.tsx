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
import { HeaderProps } from "../services";

export default function Header(props: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const heading = props.heading.split(" ");

  return (
    <Box
      w={{ base: "100vw", md: "100vw" }}
      h={{ base: "70vh", md: "70vh" }}
      bgImage="url('../src/assets/bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      // bgSize="cover"
      bgSize="cover"
      transform="rotateY(180deg)"
      p="3% 5%"
      sx={{ fontFamily: "heading" }}
    >
      <Flex
        justifyContent="end"
        transform="rotateY(180deg)"
        display={{ base: "none", md: "flex" }}
        fontSize={{ md: "clamp(0.5rem, 0.7rem, 2rem)" }}
      >
        <Flex w="30vw" color="white">
          <Box>
            <ChakraLink
              as={ReactRouterLink}
              to="/"
              _activeLink={{ color: "black" }}
            >
              Home
            </ChakraLink>
          </Box>
          <Spacer />
          <Box>
            <ChakraLink as={ReactRouterLink} to="/portfolio">
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

      {/* Mobile navbar */}
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
              <ChakraLink as={ReactRouterLink} to="/portfolio">
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

      {/* Mobile navbar */}

      <Box transform="rotateY(180deg)" color="white" h="80%" margin="2vw 0">
        {props.quote ? (
          <>
            <Box
              fontSize={{ md: "clamp(3rem, 5rem, 10rem)" }}
              fontWeight="900"
              sx={{ fontStretch: "ultra-expanded" }}
              h="33%"
              w="100%"
              ml="6vw"
            >
              <Text>{heading[0]}</Text>
            </Box>
            <Box h="33%" w="100%">
              <Flex justifyContent="space-between" alignItems="end">
                <Box w="17%">
                  <Text
                    fontSize={{ md: "clamp(0.4rem, 0.5rem, 1rem)" }}
                    fontWeight="500"
                  >
                    {props.quote.authorQuote}
                  </Text>
                  <Box h="0.5px" m="5px 0px" bgColor="white" width="20%"></Box>
                  <Text
                    m="0px"
                    fontSize={{ md: "clamp(0.4rem, 0.7rem, 1rem)" }}
                    fontWeight="500"
                  >
                    {props.quote.author}
                  </Text>
                </Box>

                <Text
                  fontSize={{ md: "clamp(3rem, 5rem, 10rem)" }}
                  fontWeight="900"
                  sx={{ fontStretch: "ultra-expanded" }}
                >
                  {heading[1]}
                </Text>
              </Flex>
            </Box>
            <Box
              h="33%"
              fontSize={{ md: "clamp(4rem, 5rem, 10rem)" }}
              fontWeight="900"
              sx={{ fontStretch: "ultra-expanded" }}
              ml="6vw"
            >
              <Text>{heading[2]}</Text>
            </Box>
          </>
        ) : (
          <>
            <Box w="100%" h="60%" pt='30%'>
              <Stack>
                <Text
                  color="#DBFF00"
                  fontSize="1.5rem"
                  sx={{ fontFamily: "subheading" }}
                >
                  {props.subheading}
                </Text>
                <Text
                  fontSize={{ md: "clamp(2rem, 3rem, 10rem)" }}
                  fontWeight="900"
                  w='50%'
                >
                  {props.heading}
                </Text>
              </Stack>
            </Box>
          </>
        )}
      </Box>
      <Stack
        color="white"
        w="30vw"
        transform="rotateY(180deg)"
        textAlign="right"
      >
        <Box w="100%">
          <Flex justifyContent="end" alignItems="center" w="100%">
            <Box h="0.5px" m="5px 5px" bgColor="white" width="10%"></Box>
            <Text fontSize="0.7rem" fontWeight="100">
              Based on
            </Text>
          </Flex>
        </Box>

        <Text fontSize="1em" fontWeight="300">
          River state, NG
        </Text>
      </Stack>
    </Box>
  );
}
