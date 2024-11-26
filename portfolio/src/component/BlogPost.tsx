import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./Header";
import { IBlogPost, IComment } from "../services";
import { Link, useParams } from "react-router-dom";
import { addComment, getComment, getPost } from "../services/blog";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Formik, Field, FieldInputProps, Form, FormikProps } from "formik";

import Footer from "./Footer";
import BlogComment from "./BlogComment";

function BlogPost() {
  const { blogId } = useParams();
  const id = blogId!.substring(1);
  const [post, setPost] = useState<Array<IBlogPost>>([]);
  const [comment, setComment] = useState<Array<IComment>>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPost(id);
      const comments = await getComment(id);
      const commentArr: IComment[] = comments!.at(0)!.comment;

      return setComment(commentArr), setPost(data!);
    }
    fetchData();
  }, [id]);

  return post!.length > 0 ? (
    <Box key={post!.at(0)!._id}>
      <Header heading="EXPLORE MY BLOG" subheading="BLOG"></Header>
      {post!.map((data) => (
        <Box
          w={{ base: "70vw" }}
          m={{ base: "50px auto" }}
          maxW="1500px"
          key={data._id}
        >
          <Link to="/blog">
            <IconButton
              aria-label="Search database"
              icon={<ArrowBackIcon />}
              marginLeft="100%"
              color="brand.600"
              padding={{ base: "5px" }}
              borderRadius="20px"
              borderWidth="1px"
              borderColor="brand.600"
            />
          </Link>
          <Box
            w={{ base: "80vw", sm: "70vw" }}
            maxW={{ md: "1000px", xl: "100%" }}
            h={{ base: "300px", sm: "400px", lg: "600px" }}
            bgImg={data!.mainImage!.asset.url}
            bgSize="cover"
            bgPos="center"
            bgRepeat="no-repeat"
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
                fontSize={{ base: "1.5rem", sm: "1.7rem", lg: "2rem" }}
                fontWeight={{ base: "600" }}
                maxW={{ sm: "50vw" }}
              >
                {" "}
                {data.title}
              </Text>
              <Text color="grey" fontSize={{ sm: "1.1rem", lg: "1.3rem" }}>
                {new Date(data.publishedAt!).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </Flex>
          </Box>

          <Box m={{ base: "50px 0px" }}>
            {data.body.map((info) => (
              <Box key={info._key} mb={{ base: "20px" }} color="grey">
                {info.image !== null ? (
                  <Box
                    bgImg={info.image.asset.url}
                    w={{ base: "100%" }}
                    h={{ base: "150px", md: "250px", xl: "350px" }}
                    mb="10px"
                    bgSize="cover"
                    bgPos="center"
                    bgRepeat="no-repeat"
                  >
                    {" "}
                  </Box>
                ) : (
                  <Box> </Box>
                )}
                <Text fontSize={{ sm: "1.2rem" }} fontWeight={{ base: "500" }}>
                  {info.subtitle}
                </Text>
                <Text fontSize={{ sm: "1rem" }}>{info.body}</Text>
              </Box>
            ))}
          </Box>
          <Box>
            <Flex
              flexDir={{ base: "column", md: "row" }}
              w={{ base: "100%" }}
              justifyContent={{ base: "space-between" }}
              alignItems={{ base: "start", md: "center" }}
            >
              <Text>Tags:</Text>
              <Flex
                flexDir="row"
                flexWrap={{ base: "wrap" }}
                w={{ base: "100%" }}
                ml={{ base: "0px", md: "10px" }}
              >
                {data.tag.map((tag, index) =>
                  index > 0 ? (
                    <Box
                      p={{ base: " 10px" }}
                      bgColor={{ base: "black" }}
                      color="white"
                      width={{ base: "fit-content" }}
                      fontSize={{ base: "0.6rem" }}
                      ml={{ base: "10px" }}
                      key={`tag-${tag}-${index}`}
                    >
                      <Text key={index}>{tag}</Text>
                    </Box>
                  ) : (
                    <Box
                      p={{ base: " 10px" }}
                      bgColor={{ base: "black" }}
                      color="white"
                      width={{ base: "fit-content" }}
                      fontSize={{ base: "0.6rem" }}
                      key={index}
                    >
                      <Text key={index}>{tag}</Text>
                    </Box>
                  )
                )}
              </Flex>
            </Flex>
          </Box>
        </Box>
      ))}
      {/* comment section */}
      <Box w={{ base: "100vw" }} mb={{ base: "100px" }}>
        <Box
          w={{ base: "70vw" }}
          m={{ base: "auto" }}
          p={{ base: "40px 0px" }}
          textAlign={{ base: "center" }}
          bgColor="#141416"
        >
          <Text color={{ base: "brand.800" }}>GIVE YOUR FEEDBACK</Text>
          <Text
            color={{ base: "white" }}
            fontSize={{ base: "2rem" }}
            fontWeight={{ base: "500" }}
            mb={{ base: "40px" }}
            p={{ base: "10px 20px" }}
          >
            {" "}
            Leave a Comment
          </Text>

          <Box w={{ base: "100%" }} m={{ base: "auto" }}>
            <Formik
              initialValues={{ fname: "", email: "", comment: "" }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  const cmt: IComment[] = [
                    {
                      name: values.fname,
                      email: values.email,
                      comment: values.comment,
                      publishedAt: new Date(),
                      reply: [],
                    },
                  ];
                  await addComment(id, cmt);
                  resetForm();
                  // Optional: Add success message here
                } catch (error) {
                  console.error("Error submitting comment:", error);
                  // Optional: Add error handling here
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {(props) => (
                <Form>
                  <Flex flexDir={{ base: "column" }} w={{ base: "100%" }}>
                    <Flex
                      m={{ base: "auto" }}
                      w={{ base: "90%" }}
                      h={{ base: "fit-content" }}
                      minH={{ base: "350px", sm: "350px" }}
                      maxH={{ base: "fit-content", sm: "400px", md: "400px" }}
                      flexDir={{ base: "column" }}
                      justifyContent={{ base: "space-between" }}
                    >
                      <Field name="fname" w={{ base: "100%", color: "white" }}>
                        {({ field }: { field: FieldInputProps<string> }) => (
                          <FormControl isRequired w={{ base: "100%" }}>
                            <Input
                              {...field}
                              placeholder="Your name"
                              _placeholder={{ opacity: 0.9, color: "white" }}
                              p={{ base: "10px 15px" }}
                              w={{ base: "90%" }}
                              maxW={{ sm: "600px" }}
                              h={{ sm: "50px" }}
                              color="white"
                              bgColor="#1A191D"
                            ></Input>
                          </FormControl>
                        )}
                      </Field>

                      <Field name="email" w={{ base: "100%", color: "white" }}>
                        {({
                          field,
                          form,
                        }: {
                          field: FieldInputProps<string>;
                          form: FormikProps<{ email: string }>;
                        }) => (
                          <FormControl isRequired w={{ base: "100%" }}>
                            <Input
                              {...field}
                              placeholder="Your email"
                              _placeholder={{ opacity: 0.9, color: "white" }}
                              p={{ base: "10px 15px" }}
                              w={{ base: "90%" }}
                              maxW={{ sm: "600px" }}
                              h={{ sm: "50px" }}
                              color="white"
                              bgColor="#1A191D"
                            ></Input>
                            <FormErrorMessage>
                              {form.errors.email}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="comment">
                        {({ field }: { field: FieldInputProps<string> }) => (
                          <FormControl isRequired w={{ base: "100%" }}>
                            <Textarea
                              {...field}
                              placeholder="Your comment"
                              _placeholder={{ opacity: 0.9, color: "white" }}
                              p={{ base: "10px 15px" }}
                              h={{
                                base: "200px",
                                sm: "200px",
                              }}
                              maxW={{ sm: "600px" }}
                              w={{ base: "90%" }}
                              color="white"
                              bgColor="#1A191D"
                            ></Textarea>
                          </FormControl>
                        )}
                      </Field>
                    </Flex>
                  </Flex>
                  <Button
                    m={{ base: "10px auto", sm: "10px 40px" }}
                    p={{
                      base: "10px 20px",
                      sm: "15px 20px",
                      lg: "15px 50px",
                      xl: "15px 70px",
                    }}
                    bgColor={{ base: "brand.600" }}
                    color={{ base: "white" }}
                    borderRadius={{ base: "40px" }}
                    isLoading={props.isSubmitting}
                    type="submit"
                    fontWeight={{ base: "200" }}
                    rightIcon={<ArrowForwardIcon />}
                  >
                    POST A COMMENT
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>

        <Box
          width={{ base: "inherit" }}
          w={{ base: "70vw" }}
          m={{ base: "auto" }}
          p={{ base: "40px 0px" }}
        >
          <Text m={{ base: "50px auto" }} fontSize={{ base: "1.9rem" }}>
            Comments
          </Text>

          <BlogComment key={comment!.at(0)!._key} {...comment!} />
        </Box>
      </Box>
      <Footer />
    </Box>
  ) : (
    <Box>
      <Header heading="EXPLORE MY BLOG" subheading="BLOG"></Header>
    </Box>
  );
}

export default BlogPost;
