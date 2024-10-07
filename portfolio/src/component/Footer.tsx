import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      bgColor="brand.900"
      h={{ base: "fit-content" }}
      p={{ md: "7%" }}
      w={{ base: "100vw" }}
    >
      <Flex
        color="grey"
        flexDir={{ base: "column" }}
        fontSize={{ base: "1.3rem" }}
        fontWeight={{ base: "300" }}
        justifyContent={{ base: "space-between" }}
        alignItems={{ base: "center" }}
        m={{ md: "auto auto 50px auto" }}
        h={{ base: "90%", md: "100%" }}
        minH={{md:"200px"}}
        maxH={{ base: "270px", md: "350px" }}
      >
        <Text> Home</Text>
        <Text> Portfolio</Text>
        <Text> Blog</Text>
        <Text>Contact</Text>
      </Flex>
      <Box
        m={{ base: "auto" }}
        fontSize={{ base: "1.3rem" }}
        fontWeight={{ base: "300" }}
        w={{ base: "fit-content", sm: "70%" }}
      >
        <Text color={{ base: "white" }} w={{ base: "fit-content" }}>
          {" "}
          Subscribe to my newsletter
        </Text>
        <Input
          placeholder="Your email here..."
          size="lg"
          w={{ base: "100%" }}
          h={{ base: "60px" }}
          variant="outline"
          padding={{ base: "5%" }}
          borderWidth={{ base: "0.5px" }}
          borderRadius={{ base: "10px" }}
          fontSize={{ base: "1rem" }}
          bgColor="transparent"
          colorScheme="whiteAlpha"
          m={{ base: "10px auto" }}
        />

        <Button
          bgColor="brand.800"
          w={{ base: "100%" }}
          h={{ base: "50px", sm: "70px" }}
          borderRadius={{ base: "10px" }}
        >
          <ArrowForwardIcon boxSize={8} />
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;
