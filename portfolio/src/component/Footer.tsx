import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      bgColor="brand.900"
      h={{ base: "fit-content" }}
      minH={{base:"400px"}}
      p={{ base:"7%", md: "5%" }}
      m="auto"
      w={{ base: "fit-content" }}
      mb="0px"
    >
      <Flex flex={{base:"column" }} w={{md:"90vw"}} m="auto" justifyContent={{md:"space-between"}}>
      <Flex
        color="grey"
        flexDir={{ base: "column" , md:"row"}}
        fontSize={{ base: "1.3rem" }}
        fontWeight={{ base: "300" }}
        justifyContent={{ base: "space-between" }}
        alignItems={{ base: "center" }}
        m={{ base: "auto auto 50px auto" ,md: "auto auto 50px auto" }}
        h={{ base: "100%", md: "100%" }}
        minH={{ base:"200px",md: "200px" }}
        maxH={{ base: "270px", md: "350px" }}
        w={{md:"30%"}}

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
        w={{ base: "fit-content"}}
        // p={{ base: "auto" }}
      >
        <Text color={{ base: "white" }} w={{ base: "fit-content" }}>
          {" "}
          Subscribe to my newsletter
        </Text>
        <Input
          placeholder="Your email here..."
          size="lg"
          w={{ base: "100%", md: "100%" }}
          maxW={{ sm: "500px" }}
          h={{ base: "60px" }}
          variant="outline"
          padding={{ base: "5%" }}
          borderWidth={{ base: "0.5px" }}
          borderRadius={{ base: "10px" }}
          fontSize={{ base: "1rem" }}
          bgColor="transparent"
          colorScheme="whiteAlpha"
          m={{ base: "10px auto" , md:"10px 20px 10px auto"}}
        />

        <Button
          bgColor="brand.800"
          w={{ base: "100%", md:"30%" }}
          // w={{ base: "100%", }}
          maxW={{ sm: "500px" }}
          h={{ base: "50px", sm: "60px" }}
          borderRadius={{ base: "10px" }}
        >
          <ArrowForwardIcon boxSize={8} />
        </Button>
      </Box>
      </Flex>
      
    </Box>
  );
}

export default Footer;
