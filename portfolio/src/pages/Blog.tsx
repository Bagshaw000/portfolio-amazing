import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  Box,
  Button,
  Text,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Blog() {
  return (
    <>
      <Header heading="EXPLORE MY BLOG" subheading="BLOG"></Header>
      <Box>
        <Box
          w="100vw"
          m={{ base: "50px auto 20px auto", md: "50px auto 30px auto" }}
          textAlign="center"
          fontSize={{ base: "1.8rem", md: "2.5rem", xl: "3rem" }}
          fontWeight={{ base: "600" }}
        >
          <Text m={{ md: "auto" }}>BLOG</Text>
        </Box>

        <Box w="100vw" textAlign="center">
          <Menu closeOnSelect={false}>
            <MenuButton
              m={{ base: "auto" }}
              display={{ base: "block", md: "none" }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              CATEGORY
            </MenuButton>
            <MenuList
              bg="white"
              p={{ base: "10px 20px" }}
              borderRadius={{ base: "10px" }}
              borderColor={{ base: "grey" }}
              zIndex="2"
              
            >
              <MenuOptionGroup defaultValue="all" title="CATEGORY" type="radio">
                <MenuItemOption value="all">ALL</MenuItemOption>
                <MenuItemOption value="content">
                  CONTENT CREATION
                </MenuItemOption>
                <MenuItemOption value="ad">AD PRODUCTION</MenuItemOption>
                <MenuItemOption value="brand">BRANDING</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>

          <Flex
            display={{ base: "none", md: "flex" }}
            flexDir={{ md: "row" }}
            alignItems={{ md: "center" }}
            m={{ md: " 20px auto" }}
            maxW={{ md: "750px" }}
            justifyContent={{ md: "space-between" }}
            w={{ md: "80vw" }}
            minW={{ md: "50vw" }}
          >
            <Box w={{ md: "fit-content" }}>
              <Link href="https://chakra-ui.com" isExternal>
                VIEW ALL
              </Link>
            </Box>
            <Box w={{ md: "fit-content" }}>
              <Link href="https://chakra-ui.com" isExternal>
                CONTENT CREATION
              </Link>
            </Box>

            <Box w={{ md: "fit-content" }}>
              <Link href="https://chakra-ui.com" isExternal>
                AD PRODUCTION
              </Link>
            </Box>

            <Box w={{ md: "fit-content" }}>
              <Link href="https://chakra-ui.com" isExternal>
                BRANDING
              </Link>
            </Box>
          </Flex>
        </Box>

        <Box justifyContent={{ base: "center" }}>
          <Flex
            flexDir="row"
            flexWrap="wrap"
            w={{ base: "100vw" }}
            maxW={{ sm: "600px", md:"900px",xl: "1300px" }}
            minW={{sm: "10vw"}}
            m={{ base: "auto" }}
            justifyContent={{ base: "center" }} 
            
          >
            {/* Loop from the database */}
            <Box
              m={{ base: "50px auto" }}
              w={{ base: "70vw" }}
              minW={{ base: "300px" }}
              maxW={{ base: "350px" }}
            >
              <Box
                w={{ base: "100%" }}
                h={{ base: "200px", md:"230px" }}
                bgColor="gray"
                pos={{ base: "relative" }}
              >
                <Box
                  p={{ base: " 10px" }}
                  bgColor={{ base: "black" }}
                  color="white"
                  width={{ base: "fit-content" }}
                  pos={{ base: "absolute" }}
                  top={{ base: "5%" }}
                  left={{ base: "5%" }}
                  fontSize={{ base: "0.6rem" }}
                >
                  <Text> 10 December 2023</Text>
                </Box>
              </Box>
              <Flex
                flexDir="column"
                w={{ base: "100%" }}
                h={{ base: "100px" }}
                m={{ base: "10px auto auto auto" }}
                justify={{ base: "space-between" }}
              >
                <Text>Title</Text>
                <Flex
                  w={{ base: "100%" }}
                  flexDir="row"
                  justify={{ base: "space-between" }}
                  alignItems={{ base: "end" }}
                >
                  <Text fontSize={{ base: "0.6rem" }} w={{ base: "60%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Text>
                  <Text
                    fontSize={{ base: "0.6rem" }}
                    color={{ base: "brand.600" }}
                  >
                    {" "}
                    Read more
                  </Text>
                </Flex>
              </Flex>
            </Box>

            <Box
              m={{ base: " 50px  auto" }}
              w={{ base: "70vw" }}
              minW={{ base: "300px" }}
              maxW={{ base: "350px" }}
            >
              <Box
                w={{ base: "100%" }}
                h={{ base: "200px", md:"230px" }}
                bgColor="gray"
                pos={{ base: "relative" }}
              >
                <Box
                  p={{ base: " 10px" }}
                  bgColor={{ base: "black" }}
                  color="white"
                  width={{ base: "fit-content" }}
                  pos={{ base: "absolute" }}
                  top={{ base: "5%" }}
                  left={{ base: "5%" }}
                  fontSize={{ base: "0.6rem" }}
                >
                  <Text> 10 December 2023</Text>
                </Box>
              </Box>
              <Flex
                flexDir="column"
                w={{ base: "100%" }}
                h={{ base: "100px" }}
                m={{ base: "10px auto auto auto" }}
                justify={{ base: "space-between" }}
              >
                <Text>Title</Text>
                <Flex
                  w={{ base: "100%" }}
                  flexDir="row"
                  justify={{ base: "space-between" }}
                  alignItems={{ base: "end" }}
                >
                  <Text fontSize={{ base: "0.6rem" }} w={{ base: "60%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Text>
                  <Text
                    fontSize={{ base: "0.6rem" }}
                    color={{ base: "brand.600" }}
                  >
                    {" "}
                    Read more
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default Blog;
