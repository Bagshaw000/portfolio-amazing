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
import { motion } from "framer-motion";

export default function Header(props: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const heading = props.heading.split(" ");

  return (
    <Box
      w={{ base: "100vw" }}
      h={{ base: "80vh", md: "90vh" }}
      minW={{ base: "100vw" }}
      minH="fit-content"
      m="0px"
      maxH={{ base: "800px", md: "1300px" }}
      bgImage="url('../src/assets/bg.jpg')"
      bgPos={{ base: "center" }}
      bgRepeat="no-repeat"
      bgSize={{ base: "cover", sm: "cover", md: "cover" }}
      transform="rotateY(180deg)"
      p="3vw 5vw"
      sx={{ fontFamily: "heading" }}
    >
      <Flex
        justifyContent="end"
        transform="rotateY(180deg)"
        display={{ base: "none", md: "flex" }}
        fontSize={{ md: "clamp(0.5rem, 0.7rem, 2rem)" }}
      >
        <Flex w={{sm:"40vw"}} color="white">
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
            <ChakraLink as={ReactRouterLink} to="/blog">
              Blog
            </ChakraLink>
          </Box>
          <Spacer />
          <Box>
            <ChakraLink as={ReactRouterLink} to="/contact">
              Contact
            </ChakraLink>
          </Box>
        </Flex>
      </Flex>

      {/* Mobile navbar */}
      <Button
        display={{ base: "block", md: "none" }}
        mt={{
          sm: "5vw",
        }}
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
              <ChakraLink as={ReactRouterLink} to="/blog">
                Blog
              </ChakraLink>
            </Box>
            <Spacer />
            <Box>
              <ChakraLink as={ReactRouterLink} to="/contact">
                Contact
              </ChakraLink>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Mobile navbar */}

      <Box
        transform="rotateY(180deg)"
        color="white"
        maxW="2000px"
        h={{ base: "70%", md: "90%", lg: "90%", xl: "90%" }}
        maxH={{ md: "850px" }}
        margin={{ base: "5vh auto auto auto", md: "10vw auto", xl: "5vw auto" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={{ md: "unset" }}
      >
        {props.quote ? (
          <>
            <Box
              h="33%"
              fontSize={{
                base: "clamp(3rem, 3.5rem, 10rem)",
                sm: "clamp(3rem, 3.9rem, 10rem)",
                md: "clamp(4rem, 5rem, 10rem)",
                lg: "clamp(5rem, 6.4rem, 10rem)",
                xl: "clamp(5rem, 7rem, 20rem)",
                "2xl": "clamp(5rem, 10rem, 20rem)",
              }}
              fontWeight="800"
              sx={{ fontStretch: "ultra-expanded" }}
              ml="6vw"
            >
              <Text sx={{ fontStretch: "1% 500%", display: "block" }}>
                {heading[0]}
              </Text>
            </Box>
            <Box h="33%" w="100%">
              <Flex justifyContent="space-between" alignItems={{ md: "end" }}>
                <Box
                  w="17%"
                  maxW="200px"
                  display={{ base: "flex", md: "block" }}
                >
                  <Text
                    fontSize={{
                      sm: "clamp(0.2rem, 0.5em, 1rem)",
                      md: "clamp(0.4rem, 0.5rem, 1rem)",
                    }}
                    fontWeight="500"
                    display={{ base: "none", md: "block" }}
                  >
                    {props.quote.authorQuote}
                  </Text>
                  <Box
                    h="0.5px"
                    m="5px 0px"
                    display={{ base: "none", md: "block" }}
                    bgColor="white"
                    width="20%"
                  ></Box>
                  <Text
                    m="0px"
                    fontSize={{
                      sm: "clamp(0.2rem, 0.5em, 1rem)",
                      md: "clamp(0.4rem, 0.7rem, 1rem)",
                    }}
                    fontWeight="500"
                    display={{ base: "none", md: "block" }}
                  >
                    {props.quote.author}
                  </Text>
                </Box>

                <Text
                  as={motion.div}
                  fontSize={{
                    base: "clamp(3rem, 3.5rem, 10rem)",
                    sm: "clamp(3rem, 3.9rem, 10rem)",
                    md: "clamp(3rem, 5rem, 10rem)",
                    lg: "clamp(5rem, 6.4rem, 10rem)",
                    xl: "clamp(5rem, 7rem, 20rem)",
                    "2xl": "clamp(5rem, 10rem, 20rem)",
                  }}
                  ml={{ base: "0200px", small: "10vw", md: "10vw" }}
                  fontWeight="800"
                  sx={{ fontStretch: "ultra-expanded" }}
                >
                  {heading[1]}
                </Text>
              </Flex>
            </Box>
            <Box
              h="33%"
              fontSize={{
                base: "clamp(3rem, 3.5rem, 10rem)",
                sm: "clamp(3rem, 3.9rem, 10rem)",
                md: "clamp(4rem, 5rem, 10rem)",
                lg: "clamp(5rem, 6.4rem, 10rem)",
                xl: "clamp(5rem, 7rem, 20rem)",
                "2xl": "clamp(5rem, 10rem, 20rem)",
              }}
              fontWeight="800"
              sx={{ fontStretch: "ultra-expanded" }}
              ml="6vw"
            >
              <Text>{heading[2]}</Text>
            </Box>
          </>
        ) : (
          <>
            <Box w="100%" h="60%" pt="30%">
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
                  w="50%"
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
        marginBottom="0px"
      >
        {/* Come back and make this responsive */}
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
