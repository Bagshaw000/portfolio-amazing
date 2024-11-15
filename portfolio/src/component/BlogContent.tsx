import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { IBlogPost } from "../services";

function BlogContent(props: Array<IBlogPost>) {
  const [posts, setPosts] = useState<Array<IBlogPost>>([]);
  // setPosts(props);
  // console.log(posts)
  useEffect(() => {
    return setPosts(Object.values(props));
  }, [props]);

  return posts.length > 0 ? (
    <Box justifyContent={{ base: "center" }}>
      <Flex
        flexDir="row"
        flexWrap="wrap"
        w={{ base: "100vw" }}
        maxW={{ sm: "600px", md: "900px", xl: "1300px" }}
        minW={{ sm: "10vw" }}
        m={{ base: "auto" }}
        justifyContent={{ base: "center" }}
      >
        {/* Loop from the database */}

        {posts!.map((data) => (
          <Box
            m={{ base: "50px auto" }}
            w={{ base: "70vw" }}
            minW={{ base: "300px" }}
            maxW={{ base: "350px" }}
            key={data._id}
            
          >
            <Link as={ReactRouterLink} to={`/blog/:${data._id}`}>
            <Box
              w={{ base: "100%" }}
              h={{ base: "200px", md: "230px" }}
              bgColor="gray"
              bgImage={data.mainImage!.asset.url}
              bgSize="cover"
              bgPos="center"
              bgRepeat="no-repeat"
              pos={{ base: "relative" }}
            >
              <Box
                p={{ base: " 10px" }}
                bgColor={{ base: "black" }}
                color="white"
                width={{ base: "fit-content" }}
                pos={{ base: "absolute" }}
                top={{ base: "5%" }}
                left={{ base: "5%" }}
                fontSize={{ base: "0.6rem" }}
              >
                <Text>
                  {new Date(data.publishedAt!).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Text>
              </Box>
            </Box>
            </Link>
            <Flex
              flexDir="column"
              w={{ base: "100%" }}
              h={{ base: "100px" }}
              m={{ base: "10px auto auto auto" }}
              justify={{ base: "space-between" }}
            >
              <Text>{data.title}</Text>
              <Flex
                w={{ base: "100%" }}
                flexDir="row"
                justify={{ base: "space-between" }}
                alignItems={{ base: "end" }}
              >
                {/* Paginate this body text */}
                <Text
                  fontSize={{ base: "0.6rem" }}
                  w={{ base: "60%" }}
                  noOfLines={2}
                >
                  {data.body[0].body}
                  {}
                </Text>
                <Link
                  fontSize={{ base: "0.6rem" }}
                  color={{ base: "brand.600" }}
                  as={ReactRouterLink}
                  // onClick={() => {
                  //   // console.log(data);
                  //   <BlogPost  />;
                  // }}
                  to={`/blog/:${data._id}`}
                >
                  Read more
                </Link>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  ) : (
    <Box w={{ base: "100vw" }} textAlign={{ base: "center" }}>
      <Flex
        p={{ base: "auto" }}
        h={{ base: "inherit" }}
        minH={{ base: "250px" }}
      >
        <Text
          fontSize={{ base: "1rem" }}
          verticalAlign={{ base: "middle" }}
          margin={{ base: "auto" }}
        >
          No blogs uploa in this category
        </Text>
      </Flex>
    </Box>
  );
}

export default BlogContent;
