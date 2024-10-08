import {
  Box,
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,

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

          <Menu >
            <MenuButton m={{base:"auto"}} display={{ base: "block", md: "none" }} as={Button} rightIcon={<ChevronDownIcon />}>
              CATEGORY
            </MenuButton>
            <MenuList bg="white" p={{base:"10px 20px"}} borderRadius={{base:"10px"}} borderColor={{base:"grey"}}>
              <MenuItem>ALL</MenuItem>
              <MenuItem>CONTENT CREATION</MenuItem>
              <MenuItem>AD PRODUCTION</MenuItem>
              <MenuItem>BRANDING</MenuItem>
            </MenuList>
          </Menu>

          <Flex
            display={{ base: "none", md: "block" }}
            flexDir={{ md: "row" }}
            alignItems={{ md: "center" }}
            m={{ md: "auto" }}
            justifyContent={{ md: "space-between" }}
            w={{ md: "fit-content" }}
            minW={{ md: "70vw" }}
          >
            <Link href="https://chakra-ui.com" isExternal>
              VIEW ALL
            </Link>
            <Link href="https://chakra-ui.com" isExternal>
              CONTENT CREATION
            </Link>
            <Link href="https://chakra-ui.com" isExternal>
              AD PRODUCTION
            </Link>
            <Link href="https://chakra-ui.com" isExternal>
              BRANDING
            </Link>
          </Flex>
        </Box>

        <Box>
          <Flex
            flexDir="row"
            flexWrap="wrap"
            w={{ base: "100vw" }}
            justifyContent={{ base: "center" }}
          >
            {/* For loop */}
            <Box
              w={{ base: "inherit" }}
              m={{ base: "50px auto" }}
              textAlign={{ base: "center" }}
            >
              <Box
                w={{ base: "70%" }}
                h={{ base: "250px" }}
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
