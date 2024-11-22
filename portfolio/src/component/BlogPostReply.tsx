import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Text,
  FormControl,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import { Formik, Field, FieldInputProps, Form, FormikProps } from "formik";
import React from "react";
import { BsArrow90DegLeft } from "react-icons/bs";

import { IBlogPostReply, IComment } from "../services";
import { replyComment } from "../services/blog";
import { useParams } from "react-router-dom";

function BlogPostReply(props: IBlogPostReply) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { blogId } = useParams();
  const id = blogId!.substring(1);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Button onClick={onOpen}>
        <Text color="brand.800" fontSize={{ base: "0.75rem" }}>
          Reply
        </Text>
        <Icon as={BsArrow90DegLeft} color="brand.800" boxSize={3} />
      </Button>
      <Button ml={4} ref={finalRef}></Button>

      <Modal
        initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(1px)" />
        <ModalContent
          bg="white"
          boxShadow="lg"
          borderRadius="md"
          zIndex={9999}
          w={{ base: "fit-content" }}
          minW={{ base: "450px" }}
          m={{ base: "auto" }}
          p={{ base: "10px 30px" }}
        >
          <Flex
            w={{ base: "100%" }}
            m={{ base: "auto 10px 10px auto" }}
            flexDir={{ base: "row" }}
            justifyContent={{ base: "space-between" }}
            alignItems={{ base: "center" }}
          >
            <ModalHeader w={{ base: "80%" }}>Reply to comment</ModalHeader>
            <ModalCloseButton w={{ base: "10%" }} />
          </Flex>

          <ModalBody pb={6}>
            <Formik
              initialValues={{ fname: "", email: "", comment: "" }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  console.log("test");
                  console.log(props.commentKey);
                  const cmt: IComment[] = [
                    {
                      name: values.fname,
                      email: values.email,
                      comment: values.comment,
                      publishedAt: new Date(),
                      replyTo: props.replyTo,
                    },
                  ];
                  const reply = await replyComment(id, props.commentKey, cmt);
                  console.log(reply);
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
                      w={{ base: "100%" }}
                      h={{ base: "fit-content" }}
                      minH={{ base: "350px", sm: "350px" }}
                      maxH={{ base: "fit-content", sm: "400px", md: "400px" }}
                      flexDir={{ base: "column" }}
                      minW={{ base: "250px" }}
                      // maxW={{ base: "70%" }}
                      justifyContent={{ base: "space-between" }}
                    >
                      <Field name="fname" w={{ base: "100%", color: "white" }}>
                        {({ field }: { field: FieldInputProps<string> }) => (
                          <FormControl isRequired w={{ base: "100%" }}>
                            <Input
                              {...field}
                              placeholder="Your name"
                              p={{ base: "10px 15px" }}
                              w={{ base: "100%" }}
                              // maxW={{ sm: "600px" }}
                              h={{ sm: "50px" }}
                              variant="outline"
                              border="0.5px solid #1A191D"
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
                              p={{ base: "10px 15px" }}
                              w={{ base: "100%" }}
                              // maxW={{ sm: "600px" }}
                              h={{ sm: "50px" }}
                              border="0.5px solid #1A191D"
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
                              // _placeholder={{ opacity: 0.9, color: "white" }}
                              p={{ base: "10px 15px" }}
                              h={{
                                base: "200px",
                                sm: "200px",
                              }}
                              // maxW={{ sm: "600px" }}
                              w={{ base: "100%" }}
                              // color="white"
                              border="0.5px solid #1A191D"
                              // bgColor="white"
                            ></Textarea>
                          </FormControl>
                        )}
                      </Field>
                    </Flex>
                  </Flex>
                  <Button
                    m={{ base: "10px auto", sm: "10px auto" }}
                    // left={{  md: "55%" }}
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BlogPostReply;
