import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { Field, FieldInputProps, Formik, Form } from "formik";

import { clientEnquiry } from "../services/contact";

function Footer() {
  return (
    <Box
      bgColor="brand.900"
      h={{ base: "fit-content" }}
      minH={{ base: "400px" }}
      p={{ base: "7%", md: "5%" }}
      m="auto"
      w={{ base: "100vw" }}
      mb="0px"
    >
      <Flex
        flexDir={{ base: "column", lg:"row" }}
        w={{ base: "90vw" }}
        m="auto"
        justifyContent={{ md: "space-between" }}
      >
        <Flex
          color="grey"
          flexDir={{ base: "column", lg: "row" }}
          fontSize={{ base: "1.3rem" }}
          fontWeight={{ base: "300" }}
          justifyContent={{ base: "space-between" }}
          alignItems={{ base: "center" }}
          m={{ base: "auto auto 50px auto", md: "auto auto 50px auto" }}
          h={{ base: "100%", md: "100%" }}
          minH={{ base: "200px", md: "200px" }}
          maxH={{ base: "270px", md: "350px" }}
          w={{ md: "30%" }}
        >
          <Text> Home</Text>
          <Text> Portfolio</Text>
          <Text> Blog</Text>
          <Text>Contact</Text>
        </Flex>
        <Box
          m={{ base: "auto" }}
          fontSize={{ base: "1.3rem" }}
          fontWeight={{ base: "300" }}
          w={{ base: "fit-content" }}
          // p={{ base: "auto" }}
        >
          <Text color={{ base: "white" }} w={{ base: "fit-content" }}>
            {" "}
            Subscribe to my newsletter
          </Text>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={async (values, { setSubmitting, setStatus }) => {
              try {
                console.log("test");
                await clientEnquiry(values);
                setStatus({ success: true });
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
                <Field name="email">
                  {({ field }: { field: FieldInputProps<string> }) => (
                    <FormControl isRequired>
                      <Input
                        {...field}
                        placeholder="Your email here..."
                        size="lg"
                        w={{ base: "100%", md: "100%" }}
                        maxW={{ sm: "500px" }}
                        h={{ base: "60px" }}
                        variant="outline"
                        padding={{ base: "5%" }}
                        borderWidth={{ base: "0.5px" }}
                        borderRadius={{ base: "10px" }}
                        fontSize={{ base: "1rem" }}
                        bgColor="transparent"
                        colorScheme="whiteAlpha"
                        color="white"
                        m={{ base: "10px auto", md: "10px 20px 10px auto" }}
                      />
                    </FormControl>
                  )}
                </Field>
                <Button
                  bgColor="brand.800"
                  w={{ base: "100%", md: "50%" }}
                  // w={{ base: "100%", }}
                  maxW={{ sm: "500px" }}
                  h={{ base: "50px", sm: "60px" }}
                  borderRadius={{ base: "10px" }}
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  <ArrowForwardIcon boxSize={8} />
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
