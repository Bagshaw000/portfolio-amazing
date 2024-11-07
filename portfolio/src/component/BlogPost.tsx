import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./Header";
import { IBlogPost } from "../services";
import { useParams } from "react-router-dom";
import { getPost } from "../services/blog";

function BlogPost() {
  const { blogId } = useParams();
  const id = blogId!.substring(1);
  const [post, setPost] = useState<Array<IBlogPost>>([]);
  console.log(blogId);
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      const data = await getPost(id);
      console.log(data);
      return setPost(data!);
    }
    fetchData();
    //  console.log(posts)
  }, [id]);

  // console.log(posts)

  return post!.length > 0 ? (
    <Box>
      <Header heading="EXPLORE MY BLOG" subheading="BLOG"></Header>
      {post!.map((data) => (
        <Box w={{ base: "70vw" }} m="auto">
          <Box
            w={{ base: "80vw", sm: "70vw" }}
            maxW={{ md: "1000px" }}
            h={{ base: "300px", sm: "500px", xl: "600px" }}
            bgImg={data!.mainImage!.asset.url}
            m={{ base: "50px auto" }}
          ></Box>
          <Box m={{ base: "10px auto " }}>
            <Flex
              flexDir={{ base: "column", md: "row" }}
              justifyContent={{ sm: "space-between" }}
              alignItems={{ sm: "start" }}
            >
              <Text
                color="brand.900"
                fontSize={{ base: "1.5rem", sm: "1.7rem" }}
                fontWeight={{ base: "600" }}
                maxW={{ sm: "50vw" }}
              >
                {" "}
                {data.title}
              </Text>
              <Text color="grey" fontSize={{ sm: "1.1rem" }}>
                {new Date(data.publishedAt!).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </Flex>
          </Box>

          <Box m={{ sm: "50px 0px" }}>
            {data.body.map((info) => (
              <Box key={info._key} mb={{base:"20px"}} color="grey">
                <Text  fontSize={{ sm: "1.3rem" }} fontWeight={{base:"500"}}>
                  {info.subtitle}
                </Text>
                <Text fontSize={{ sm: "1.1rem" }}>{info.body}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  ) : (
    <Box>
      <Header heading="EXPLORE MY BLOG" subheading="BLOG"></Header>
    </Box>
  );
}

export default BlogPost;
