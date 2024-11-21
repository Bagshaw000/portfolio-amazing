import React, { useEffect, useState } from "react";
import { IComment } from "../services";
import { Box, Flex, Text } from "@chakra-ui/react";
import BlogPostReply from "./BlogPostReply";

function BlogComment(props: IComment[]) {
  console.log(Object.values(props));

  const [comments, setComment] = useState<Array<IComment>>([]);

  useEffect(() => {
    return setComment(Object.values(props));
  }, [props]);
  return comments.length > 0 ? (
    <>
      <Box w={{ base: "inherit" }} mb={{ base: "100px" }}>
        {comments.map((comment) => (
          <Box
            key={comment._key}
            w={{ base: "70vw" }}
            m={{ base: "auto auto 50px auto" }}
          >
            <Box
              m={{ base: "auto auto 10px auto" }}
              bgColor="#141416"
              p={{ base: "10px 20px" }}
            >
              <Flex
                w={{ base: "100%" }}
                flexDir={{ base: "column" }}
                gap={{ base: "10px" }}
              >
                <Text
                  color="brand.800"
                  fontSize={{ base: "1.3rem" }}
                  fontWeight={{ base: "500" }}
                >
                  {comment.name}
                </Text>
                <Text
                  color="white"
                  fontSize={{ base: "1rem" }}
                  fontWeight={{ base: "300" }}
                >
                  {comment.comment}
                </Text>
              </Flex>
              <Flex
                flexDir={{ base: "row" }}
                justifyContent={{ base: "space-between" }}
                alignItems={{ base: "center" }}
              >
                <Text
                  color="white"
                  fontSize={{ base: "0.7rem" }}
                  fontWeight={{ base: "300" }}
                >
                  {new Date(comment.publishedAt!).toLocaleTimeString(
                    undefined,
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </Text>
                <Flex
                  flexDir={{ base: "row" }}
                  justifyContent={{ base: "flex-end" }}
                  alignItems={{ base: "end" }}
                  w={{ base: "20%" }}
                >
                  <BlogPostReply
                    commentKey={comment._key!}
                    isReply={false}
                    replyTo={comment.name}
                  />
                </Flex>
              </Flex>
            </Box>
            <Box m={{ base: "auto auto 10px 40px" }}>
              {comment.reply!.length > 0 && (
                <Text>
                  {comment.reply!.map((reply) => (
                    <Flex
                      flexDir={{ base: "column" }}
                      gap={{ base: "5px" }}
                      m={{ base: "auto auto 10px auto" }}
                      bgColor="#141416"
                      p={{ base: "10px 20px" }}
                    >
                      <Text
                        color="brand.800"
                        fontSize={{ base: "1.3rem" }}
                        fontWeight={{ base: "500" }}
                      >
                        {reply.name}
                      </Text>
                      <Text
                        color="white"
                        fontSize={{ base: "1rem" }}
                        fontWeight={{ base: "300" }}
                      >
                        {reply.comment}
                      </Text>
                      <Flex w={{base:"100%"}} flexDir={{base:"row"}} justifyContent={{base:"space-between"}}>
                        <Text
                          color="white"
                          fontSize={{ base: "0.65rem" }}
                          fontWeight={{ base: "300" }}
                        >
                          {new Date(reply.publishedAt!).toLocaleTimeString(
                            undefined,
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </Text>

                        <Flex
                          flexDir={{ base: "row" }}
                          justifyContent={{ base: "space-between" }}
                          alignItems={{ base: "center" }}
                         
                        >
                          <BlogPostReply
                            commentKey={comment._key!}
                            isReply={false}
                            replyTo={comment.name}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
                </Text>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  ) : (
    <Box></Box>
  );
}

export default BlogComment;
