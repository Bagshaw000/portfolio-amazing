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
import { IBlogPost } from "../services";
// import { useEffect, useState } from "react";
import { getAllPost } from "../services/blog";
import BlogContent from "../component/BlogContent";
import { useState } from "react";

function Blog() {
 
  const [post, setPost] = useState<Array<IBlogPost>|undefined>([])


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
              <Link onClick={async ()=>{
                const data:Array<IBlogPost>|undefined = await getAllPost();
                
                setPost(data)
              }}>
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

       <BlogContent {...post} />
      </Box>
      <Footer></Footer>
    </>
  );
}

export default Blog;
