import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { Field, FieldInputProps, Form, Formik, FormikProps } from "formik";
import { Bounce, toast } from "react-toastify";
import { clientEnquiry } from "../services/contact";
import { useState } from "react";

function Contact() {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <Header heading="LET'S TALK ABOUT IDEAS" subheading="CONTACT"></Header>
      {popup
        ? toast("🦄 Wow so easy!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
        : ""}
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

        <Box mt={{ base: "20px" }}>
          <Formik
            initialValues={{ fname: "", lname: "", email: "", message: "" }}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
              try {
                const data = { ...values, category: "new" };
                
                const emailContact = await clientEnquiry(data);

                if (emailContact.status === 200) {
                  console.log("success alert");
                  setPopup(true);
                  setStatus({ success: true })
                }
              
              } catch (err) {
                setStatus({
                  success: false,
                  error: `Failed to send message ${err}`,
                });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {(props) => (
              <Form>
                <Flex flexDir={{ base: "column" }}>
                  <Flex
                    m={{ base: "auto" }}
                    w={{ base: "fit-content" }}
                    h={{ base: "fit-content" }}
                    minH={{ base: "400px", sm: "500px", md: "520px" }}
                    flexDir={{ base: "column" }}
                    justifyContent={{ base: "space-between" }}
                  >
                    <Field name="fname" w={{ base: "fit-content" }}>
                      {({ field }: { field: FieldInputProps<string> }) => (
                        <FormControl isRequired w={{ base: "fit-content" }}>
                          <FormLabel w={{ base: "fit-content" }}>
                            First Name
                          </FormLabel>
                          <Input
                            {...field}
                            placeholder="First name"
                            borderWidth="1px"
                            p={{ base: "5px 10px" }}
                            w={{ base: "70vw" }}
                            maxW={{ sm: "500px" }}
                            h={{ sm: "50px" }}
                          ></Input>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="lname" w={{ base: "fit-content" }}>
                      {({ field }: { field: FieldInputProps<string> }) => (
                        <FormControl isRequired w={{ base: "fit-content" }}>
                          <FormLabel w={{ base: "fit-content" }}>
                            Last Name
                          </FormLabel>
                          <Input
                            {...field}
                            placeholder="Last name"
                            borderWidth="1px"
                            p={{ base: "5px 10px" }}
                            w={{ base: "70vw" }}
                            maxW={{ sm: "500px" }}
                            h={{ sm: "50px" }}
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
                          <FormLabel w={{ base: "fit-content" }}>
                            Email
                          </FormLabel>
                          <Input
                            {...field}
                            placeholder="Your email"
                            borderWidth="1px"
                            p={{ base: "5px 10px" }}
                            w={{ base: "70vw" }}
                            maxW={{ sm: "500px" }}
                            h={{ sm: "50px" }}
                          ></Input>
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Field name="message">
                      {({ field }: { field: FieldInputProps<string> }) => (
                        <FormControl isRequired w={{ base: "fit-content" }}>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            {...field}
                            placeholder="Your message"
                            borderWidth="1px"
                            p={{ base: "5px 10px" }}
                            h={{
                              base: "150px",
                              sm: "200px",
                            }}
                            maxW={{ sm: "500px" }}
                            w={{ base: "70vw" }}
                          ></Textarea>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

                  <Button
                    m={{ base: "10px auto" }}
                    p={{ base: "10px 20px", sm: "15px 25px" }}
                    bgColor={{ base: "brand.600" }}
                    color={{ base: "white" }}
                    borderRadius={{ base: "5px" }}
                    isLoading={props.isSubmitting}
                    type="submit"
                    w={{ base: "70vw" }}
                    maxW={{ sm: "500px" }}
                  >
                    Submit
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default Contact;
