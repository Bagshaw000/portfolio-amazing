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
import PortfolioContent from "../component/PortfolioContent";
import { useState, useEffect } from "react";
import { IProject } from "../services";

import {
  getAdProject,
  getAllProject,
  getBrandProject,
  getContentProject,
} from "../services/project";

function Portfolio() {
  const [post, setPost] = useState<Array<IProject> | undefined>([]);
  useEffect(() => {
    async function fetchData() {
      setPost(await getAllProject());
    }
    fetchData();
  }, []);
  // console.log(post);

  return (
    <>
      <Header heading="EXPLORE MY FEATURE WORK" subheading="PORTFOLIO"></Header>

      <Box>
        <Box
          w="100vw"
          m={{ base: "50px auto 20px auto", md: "50px auto 30px auto" }}
          textAlign="center"
          fontSize={{ base: "1.8rem", md: "2.5rem", xl: "3rem" }}
          fontWeight={{ base: "600" }}
        >
          <Text m={{ md: "auto" }}>PORTFOLIO</Text>
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
            >
              <MenuOptionGroup defaultValue="all" title="CATEGORY" type="radio">
                <MenuItemOption
                  value="all"
                  onClick={async () => {
                    const data = await getAllProject();

                    setPost(data);
                    console.log(data);
                    console.log("Test")
                  }}
                >
                  ALL
                </MenuItemOption>
                <MenuItemOption
                  value="content"
                  onClick={async () => {
                    const data = await getContentProject();

                    setPost(data);
                  }}
                >
                  CONTENT CREATION
                </MenuItemOption>
                <MenuItemOption
                  value="ad"
                  onClick={async () => {
                    const data = await getAdProject();

                    setPost(data);
                  }}
                >
                  AD PRODUCTION
                </MenuItemOption>
                <MenuItemOption
                  value="brand"
                  onClick={async () => {
                    const data = await getBrandProject();

                    setPost(data);
                  }}
                >
                  BRANDING
                </MenuItemOption>
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
              <Link
                onClick={async () => {
                  const data = await getAllProject();
                  console.log(data);
                  setPost(data);
                }}
              >
                VIEW ALL
              </Link>
            </Box>
            <Box w={{ md: "fit-content" }}>
              <Link
                onClick={async () => {
                  const data = await getContentProject();
                  console.log(data);
                  setPost(data);
                }}
              >
                CONTENT CREATION
              </Link>
            </Box>

            <Box w={{ md: "fit-content" }}>
              <Link
                onClick={async () => {
                  const data = await getAdProject();

                  setPost(data);
                }}
              >
                AD PRODUCTION
              </Link>
            </Box>

            <Box w={{ md: "fit-content" }}>
              <Link
                onClick={async () => {
                  const data = await getBrandProject();

                  setPost(data);
                }}
              >
                BRANDING
              </Link>
            </Box>
          </Flex>
        </Box>

        <PortfolioContent {...post!} />
      </Box>
      <Footer></Footer>
    </>
  );
}

export default Portfolio;
