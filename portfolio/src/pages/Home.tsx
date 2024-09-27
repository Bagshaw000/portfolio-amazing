import Header from "../component/Header";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header
        heading="DIGITAL MARKETING AGENCY"
        quote={{
          authorQuote:
            "People do not buy goods and services. They buy relations, stories, and magic.",
          author: "Seth Godin",
        }}
        subheading=""
      ></Header>

      <Box>
        <Flex
          w={{ base: "80vw" }}
          margin="70px auto"
          flexDir={"column"}
          minH={{ base: "1120px" }}
          justifyContent={{ base: "space-between" }}
        >
          <Flex justifyContent="center" alignItems="center" flexDir={"column"}>
            <Box
              bgImg="url('../src/assets/profile.jpg')"
              w={{ base: "80vw" }}
              minH="400PX"
              bgPos={{ base: "center" }}
              bgRepeat="no-repeat"
              bgSize={{ base: "cover" }}
              borderRadius="20px"
            ></Box>

            <Flex
              mt={{ base: "50px" }}
              w={{ base: "80vw" }}
              minH={{ base: "550px" }}
              textAlign={{ base: "justify" }}
              flexDir={{ base: "column" }}
              justifyContent={{ base: "space-between" }}
            >
              <Text
                fontWeight="900"
                color={{ base: "brand.600" }}
                fontSize={{ base: "1.rem" }}
              >
                HI, I AM AMAZING IRECHUKWU A DIGITAL MARKETER
              </Text>
              <Text
                fontWeight="500"
                color={{ base: "brand.900" }}
                fontSize={{ base: "1.1rem" }}
              >
                Hi, I'm Amazing! I help brands and businesses grow their online
                presence with tailored content strategies that perfectly align
                with your brand. What started as a side hustle to pay the bills
                quickly became a passion. I fell in love with social media
                management, especially watching a brand grow into a profitable
                and influential presence. The thrill of transforming potential
                into success is what drives me to do this full-time.
              </Text>
              <Flex
                flexDir="row"
                color={{ base: "brand.900" }}
                fontSize={{ base: "1.1rem" }}
                w={{ base: "80vw" }}
              >
                <Flex flexDir="column" w={{ base: "40%" }}>
                  <Text>Name </Text>
                  <Text>Nationality </Text>
                  <Text>Experience </Text>
                  <Text>Language </Text>
                  <Text>Email </Text>
                </Flex>
                <Flex flexDir="column">
                  <Text>:Amazing Irechukwu </Text>
                  <Text>:Nigerian </Text>
                  <Text>:4+ Years </Text>
                  <Text>:English </Text>
                  <Text>:test@gmail.com </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Button
            bgColor="brand.600"
            color="white"
            w={{ base: "100%" }}
            p={{ base: "15px 15px" }}
            fontSize={{ base: "1.2rem" }}
            fontWeight={{ base: "500" }}
            borderRadius="10px"
          >
            Get Started
          </Button>
        </Flex>

        <Box textAlign={{ base: "center" }}>
          <Flex
            flexDir={{ base: "row" }}
            w={{ base: "90vw" }}
            justifyContent={{ base: "space-between" }}
            m={{ base: "0px auto" }}
          >
            <Flex flexDir={{ base: "column" }} fontFamily="body">
              <Text
                fontSize={{ base: "3.5rem" }}
                fontWeight={{ base: "800" }}
                color="brand.600"
              >
                4
              </Text>
              <Text
                fontSize={{ base: "0.8rem" }}
                fontWeight={{ base: "100" }}
                color="brand.900"
              >
                Year Experience
              </Text>
            </Flex>
            <Box></Box>
            <Flex flexDir={{ base: "column" }}>
              <Text
                fontSize={{ base: "3.5rem" }}
                fontWeight={{ base: "800" }}
                color="brand.600"
              >
                12
              </Text>
              <Text
                fontSize={{ base: "0.8rem" }}
                fontWeight={{ base: "100" }}
                color="brand.900"
              >
                Business
              </Text>
            </Flex>
            <Box></Box>
            <Flex flexDir={{ base: "column" }}>
              <Text
                fontSize={{ base: "3.5rem" }}
                fontWeight={{ base: "800" }}
                color="brand.600"
              >
                20
              </Text>
              <Text
                fontSize={{ base: "0.8rem" }}
                fontWeight={{ base: "100" }}
                color="brand.900"
              >
                Project Completed
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
