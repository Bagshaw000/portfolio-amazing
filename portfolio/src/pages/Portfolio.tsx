import {
  Box,
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Portfolio() {
  return (
    <>
      <Header heading="EXPLORE MY FEATURE WORK" subheading="PORTFOLIO"></Header>

      <Box>
        <Box
          w="100vw"
          m={{ base: "50px auto 20px auto", md: "auto" }}
          textAlign="center"
          fontSize={{ base: "1.8rem" }}
          fontWeight={{ base: "600" }}
        >
          <Text m={{ md: "auto" }}>PORTFOLIO</Text>
        </Box>

        <Box w="100vw" textAlign="center">
          {/* <Select
            placeholder="CATEGORY"
            size="md"
            variant="outline"
            display={{ base: "block", md: "none" }}
          >
            <option value="option1">ALL</option>
            <option value="option2">CONTENT CREATION</option>
            <option value="option3">AD PRODUCTION</option>
            <option value="option4">BRANDING</option>
          </Select> */}

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
            maxW={{md:"750px"}}
            justifyContent={{ md: "space-between" }}
            w={{ md: "80vw" }}
            minW={{ md: "70vw" }}
          >
            <Box w={{md:"fit-content"}}>
              <Link href="https://chakra-ui.com" isExternal>
                VIEW ALL
              </Link>
            </Box>
            <Box w={{md:"fit-content"}}>
              <Link href="https://chakra-ui.com" isExternal>
                CONTENT CREATION
              </Link>
            </Box>

            <Box w={{md:"fit-content"}}>
              <Link href="https://chakra-ui.com" isExternal>
                AD PRODUCTION
              </Link>
            </Box>

            <Box w={{md:"fit-content"}}>
              <Link href="https://chakra-ui.com" isExternal>
                BRANDING
              </Link>
            </Box>
          </Flex>
        </Box>

        <Box   w={{ base: "100vw" }}>
          <Flex
            flexDir="row"
            flexWrap="wrap"
            w={{ base: "inherit" }}
            maxW={{md:"1100px"}}
            m={{md:"auto"}}
            justifyContent={{ base: "center" }}
          >
            {/* For loop */}
            <Box
              w={{ base: "70%" , md:"60%"}}
              maxW={{md:"450px"}}
              m={{ base: "50px auto 20px auto" , md:"50px auto 50px auto" }}
              textAlign={{ base: "center" }}
              onClick={()=>{}}
            >
              <Box
                w={{ base: "70%" , md: "100%"}}
                h={{ base: "250px" }}
                bg="grey"
                maxW={{ base: "450px",  md:"500px" }}
                m={{ base: "auto" }}
              ></Box>
              <Text mt={{ base: "30px" }} fontSize={{ base: "1.2rem" }}>
                {" "}
                TITLE
              </Text>
            </Box>
            <Box
               w={{ base: "70%" , md:"60%"}}
               maxW={{md:"450px"}}
               m={{ base: "50px auto 20px auto" , md:"50px auto 50px auto" }}
               textAlign={{ base: "center" }}
               onClick={()=>{}}
            >
              <Box
                 w={{ base: "70%" , md: "100%"}}
                h={{ base: "250px" }}
                maxW={{ base: "450px", md:"500px" }}
                bg="grey"
                m={{ base: "auto" }}
              ></Box>
              <Text mt={{ base: "30px" }} fontSize={{ base: "1.2rem" }}>
                {" "}
                TITLE
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default Portfolio;
