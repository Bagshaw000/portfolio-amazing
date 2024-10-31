import { Box, Flex, Text } from "@chakra-ui/react";
import  { useEffect, useState } from "react";
import { IProject } from "../services";

export default function PortfolioContent(props: Array<IProject>) {
  const [posts, setPosts] = useState<Array<IProject>>([]);
  // setPosts(props);
  console.log(posts)
  useEffect(() => {

    return setPosts(Object.values(props));
  }, [props]);
  return posts.length > 0 ? (
    <Box w={{ base: "100vw" }}>
      <Flex
        flexDir="row"
        flexWrap="wrap"
        w={{ base: "inherit" }}
        maxW={{ md: "1000px", xl: "1300px" }}
        m={{ md: "auto" }}
        justifyContent={{ base: "center" }}
      >
        {/* For loop */}

        {posts.map((data) => (
          <Box
            w={{ base: "70%", md: "50%", xl: "40%" }}
            maxW={{ md: "500px", xl: "600px" }}
            m={{ base: "50px auto 20px auto", md: "30px auto 50px auto" }}
            textAlign={{ base: "center" }}
            p={{ md: "20px", xl: "10px" }}
            onClick={() => {}}
            key={data._id}
          >
            <Box
              w={{ base: "70%", md: "100%" }}
              h={{ base: "250px", xl: "300px" }}
              minW={{ base: "300px", xl: "530px" }}
              bg="grey"
              // bgImage={data.image[0]}
              maxW={{ base: "450px", md: "450px", xl: "550px" }}
              m={{ base: "auto" }}
            ></Box>
            <Text mt={{ base: "30px" }} fontSize={{ base: "1.2rem" }}>
              {" "}
              {data.title}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  ) : (
    <Box></Box>
  );
}
