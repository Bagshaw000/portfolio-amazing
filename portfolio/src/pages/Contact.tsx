import Header from "../component/Header";
import Footer from "../component/Footer";
import { Box, Flex, Text } from "@chakra-ui/react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Contact() {
  return (
    <>
      <Header heading="LET'S TALK ABOUT IDEAS" subheading="CONTACT"></Header>

      <Box w={{ base: "100vw" }}>
        <Box w={{ base: "inherit" }} m={{ base: "50px auto" }}>
          <Flex
            flexDir={{ base: "column" }}
            textAlign={{ base: "center" }}
            w={{ base: "inherit" }}
            h={{ base: "100px" }}
            justifyContent={{ base: "space-between" }}
          >
            <Text
              fontSize={{ base: "1.5rem" }}
              fontWeight={{ base: "600" }}
              color={{ base: "brand.600" }}
            >
              CONTACT ME
            </Text>
            <Text
              fontSize={{ base: "1.9rem" }}
              fontWeight={{ base: "500" }}
              color={{ base: "brand.900" }}
            >
              Let's Talk About Ideas
            </Text>
          </Flex>
        </Box>

        <Box w={{ base: "100vw" }}>
          <Flex
            borderWidth={{ base: "1px" }}
            p={{ base: "10px 20px" }}
            bgColor={{ base: "brand.900" }}
            color={{ base: "gray" }}
            justifyContent={{ base: "" }}
            w={{ base: "90vw" }}
            m={{ base: "auto" }}
          >
            <MailOutlineIcon
              sx={{ width: "60px", height: "60px", marginRight: "10px" }}
            ></MailOutlineIcon>
            <Box>
              <Text fontSize={{ base: "1.3rem" }}>Email</Text>
              <Text fontSize={{ base: "1rem" }} fontWeight={{ base: "300" }}>
                dummy email
              </Text>
            </Box>
            <Box></Box>
          </Flex>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default Contact;
