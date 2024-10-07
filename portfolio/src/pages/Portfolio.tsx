import { Box, Flex, Link, Select, Text } from "@chakra-ui/react";
import Header from "../component/Header";

function Portfolio() {
  return (
    <>
      <Header heading="EXPLORE MY FEATURE WORK" subheading="PORTFOLIO"></Header>

      <Box>
        <Box w="100vw" m={{ md: "auto" }} textAlign="center" fontSize={{}}>
          <Text m={{ md: "auto" }}>PORTFOLIO</Text>
        </Box>
        <Box w="100vw">
          <Select
            placeholder="Select Category"
            size="md"
            variant="outline"
            w="inherit"
            m="auto"
          >
            <option value="option1">ALL</option>
            <option value="option2">CONTENT CREATION</option>
            <option value="option3">AD PRODUCTION</option>
            <option value="option4">BRANDING</option>
          </Select>
          <Flex
            display={{ base: "none" }}
            flexDir={{ md: "row" }}
            alignItems={{ md: "center" }}
            m={{ md: "auto" }}
            justifyContent={{ md: "space-between" }}
            w={{ md: "40%" }}
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
      </Box>
    </>
  );
}

export default Portfolio;
