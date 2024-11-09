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
import { IBlogPost } from "../services";
import { Form, Link, useParams } from "react-router-dom";
import { getPost } from "../services/blog";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Formik, Field, FieldInputProps, FormikProps } from "formik";

import Footer from "./Footer";

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
        <Box
          w={{ base: "70vw" }}
          m={{ base: "50px auto", lg: "150px auto" }}
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
            h={{ base: "300px", sm: "400px", xl: "600px" }}
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
                // justifyContent={{ base: "space-between" }}
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

      <Box w={{ base: "100vw" }} mb={{base:"100px"}}>
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
          >
            {" "}
            Leave a Comment
          </Text>

          <Box w={{base:"fit-content"}} m={{base:"auto"}}>

         

          <Formik
            initialValues={{ name: "", email: "", comment: "" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form>
                <Flex flexDir={{ base: "column" }}>
                  <Flex
                    m={{ base: "auto" }}
                    w={{ base: "fit-content" }}
                    h={{ base: "fit-content" }}
                    minH={{ base: "400px", sm: "300px", md: "350px" }}
                    maxH={{ base: "fit-content", sm: "400px", md: "400px" }}
                    flexDir={{ base: "column" }}
                    justifyContent={{ base: "space-between" }}
                  >
                    <Field
                      name="name"
                      w={{ base: "fit-content", color: "white" }}
                    >
                      {({ field }: { field: FieldInputProps<string> }) => (
                        <FormControl isRequired w={{ base: "fit-content" }}>
                          <Input
                            {...field}
                            placeholder="Your name"
                            _placeholder={{ opacity: 0.9, color: 'white' }}
                            p={{ base: "10px 15px" }}
                            w={{ base: "70vw" }}
                            maxW={{ sm: "600px"  }}
                            h={{ sm: "50px" }}
                            color="white"
                            bgColor="#1A191D"
                          ></Input>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="email" w={{ base: "fit-content" }}>
                      {({
                        field,
                        form,
                      }: {
                        field: FieldInputProps<string>;
                        form: FormikProps<{ email: string }>;
                      }) => (
                        <FormControl isRequired w={{ base: "fit-content" }}>
                          <Input
                            {...field}
                            placeholder="Your email"
                            _placeholder={{ opacity: 0.9, color: 'white' }}
                            p={{ base: "10px 15px" }}
                            w={{ base: "70vw" }}
                            maxW={{ sm: "600px"  }}
                            h={{ sm: "50px" }}
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
                        <FormControl isRequired w={{ base: "fit-content" }}>
                          <Textarea
                            {...field}
                            placeholder="Your comment"
                            _placeholder={{ opacity: 0.9, color: 'white' }}
                            p={{ base: "10px 15px" }}
                            h={{
                              base: "150px",
                              sm: "200px",
                            }}
                            maxW={{ sm: "600px" }}
                            w={{ base: "70vw" }}
                            bgColor="#1A191D"
                          ></Textarea>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

                  <Button
                    m={{ base: "10px 60px" }}
                    left={{base:"55%"}}
                    p={{ base: "10px 20px", sm: "15px 20px" }}
                    bgColor={{ base: "brand.600" }}
                    color={{ base: "white" }}
                    borderRadius={{ base: "40px" }}
                    isLoading={props.isSubmitting}
                    type="submit"
                    fontWeight={{base:"200"}}
                    w={{ base: "35%" }}
                    maxW={{ sm: "210px" }}
                    rightIcon={<ArrowForwardIcon />}
                  >
                    POST A COMMENT

                    
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
          </Box>
        </Box>
      </Box>
      <Footer/>
    </Box>
  ) : (
    <Box>
      <Header heading="EXPLORE MY BLOG" subheading="BLOG"></Header>
    </Box>
  );
}

export default BlogPost;
