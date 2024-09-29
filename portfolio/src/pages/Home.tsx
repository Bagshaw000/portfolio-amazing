import { ArrowForwardIcon } from "@chakra-ui/icons";
import Header from "../component/Header";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  const testimonial = ["Dog", "Bird", "Cat", "Mouse"];

  return (
    <>
      <Header
        heading="DIGITAL MARKETING AGENCY"
        quote={{
          authorQuote:
            "People do not buy goods and services. They buy relations, stories, and magic.",
          author: "Seth Godin",
        }}
        subheading=""
      ></Header>

      {/* Services section */}
      <Box>
        <Flex
          w={{ base: "80vw" }}
          margin="70px auto"
          flexDir={"column"}
          minH={{ base: "1120px" }}
          justifyContent={{ base: "space-between" }}
        >
          <Flex justifyContent="center" alignItems="center" flexDir={"column"}>
            <Box
              bgImg="url('../src/assets/profile.jpg')"
              w={{ base: "80vw" }}
              minH="400PX"
              bgPos={{ base: "center" }}
              bgRepeat="no-repeat"
              bgSize={{ base: "cover" }}
              borderRadius="20px"
            ></Box>

            <Flex
              mt={{ base: "50px" }}
              w={{ base: "80vw" }}
              minH={{ base: "550px" }}
              textAlign={{ base: "justify" }}
              flexDir={{ base: "column" }}
              justifyContent={{ base: "space-between" }}
            >
              <Text
                fontWeight="900"
                color={{ base: "brand.600" }}
                fontSize={{ base: "1.rem" }}
              >
                HI, I AM AMAZING IRECHUKWU A DIGITAL MARKETER
              </Text>
              <Text
                fontWeight="300"
                color={{ base: "brand.900" }}
                fontSize={{ base: "1.1rem" }}
              >
                Hi, I'm Amazing! I help brands and businesses grow their online
                presence with tailored content strategies that perfectly align
                with your brand. What started as a side hustle to pay the bills
                quickly became a passion. I fell in love with social media
                management, especially watching a brand grow into a profitable
                and influential presence. The thrill of transforming potential
                into success is what drives me to do this full-time.
              </Text>
              <Flex
                flexDir="row"
                color={{ base: "brand.900" }}
                fontSize={{ base: "1.1rem" }}
                w={{ base: "80vw" }}
                fontWeight="300"
              >
                <Flex flexDir="column" w={{ base: "40%" }}>
                  <Text>Name </Text>
                  <Text>Nationality </Text>
                  <Text>Experience </Text>
                  <Text>Language </Text>
                  <Text>Email </Text>
                </Flex>
                <Flex flexDir="column">
                  <Text>:Amazing Irechukwu </Text>
                  <Text>:Nigerian </Text>
                  <Text>:4+ Years </Text>
                  <Text>:English </Text>
                  <Text>:test@gmail.com </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Button
            bgColor="brand.600"
            color="white"
            w={{ base: "100%" }}
            p={{ base: "15px 15px" }}
            fontSize={{ base: "1.2rem" }}
            fontWeight={{ base: "500" }}
            borderRadius="10px"
          >
            Get Started
          </Button>
        </Flex>

        <Box textAlign={{ base: "center" }}>
          <Flex
            flexDir={{ base: "row" }}
            w={{ base: "90vw" }}
            justifyContent={{ base: "space-between" }}
            m={{ base: "0px auto" }}
            h="fit-content"
          >
            <Flex flexDir={{ base: "column" }} fontFamily="body">
              <Text
                fontSize={{ base: "3.5rem" }}
                fontWeight={{ base: "800" }}
                color="brand.600"
              >
                4
              </Text>
              <Text
                fontSize={{ base: "0.8rem" }}
                fontWeight={{ base: "100" }}
                color="brand.900"
              >
                Year Experience
              </Text>
            </Flex>
            <Box w="0.1px" bgColor="grey"></Box>
            <Flex flexDir={{ base: "column" }}>
              <Text
                fontSize={{ base: "3.5rem" }}
                fontWeight={{ base: "800" }}
                color="brand.600"
              >
                12
              </Text>
              <Text
                fontSize={{ base: "0.8rem" }}
                fontWeight={{ base: "100" }}
                color="brand.900"
              >
                Business
              </Text>
            </Flex>
            <Box w="0.1px" bgColor="grey"></Box>
            <Flex flexDir={{ base: "column" }}>
              <Text
                fontSize={{ base: "3.5rem" }}
                fontWeight={{ base: "800" }}
                color="brand.600"
              >
                20
              </Text>
              <Text
                fontSize={{ base: "0.8rem" }}
                fontWeight={{ base: "100" }}
                color="brand.900"
              >
                Project Completed
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Box
          bgColor="brand.500"
          w={{ base: "90vw" }}
          m="100px  auto"
          p={{ base: "25px 25px 45px 25px" }}
          borderRadius={{ base: "20px" }}
        >
          <Box w="100%">
            <Flex flexDir={{ base: "column" }}>
              <Text
                color="white"
                fontFamily="body"
                fontWeight="500"
                fontSize={{ base: "1rem" }}
              >
                Our Expertise
              </Text>
              <Text
                color="white"
                fontFamily="body"
                fontWeight="200"
                fontSize={{ base: "0.8rem" }}
              >
                We provide tailored digital marketing services, from strategy
                and content creation to targeted ads and performance analysis,
                to help your brand thrive online.
              </Text>
            </Flex>
            <Flex flexDir={{ base: "column" }}>
              {/* First Box */}
              <Box m={{ base: "20px auto" }}>
                <Box
                  padding={{ base: "30px" }}
                  bg="#3E3E3E"
                  w={{ base: "97%" }}
                  h="380px"
                  m={{ base: "20px auto" }}
                  borderRadius="30px"
                  position="relative"
                >
                  <Text
                    fontSize="1.8rem"
                    fontWeight="bold"
                    position="absolute"
                    right="8%"
                    top="5%"
                    color="white"
                  >
                    01
                  </Text>

                  <ArrowForwardIcon
                    w={{ base: "20px" }}
                    h={{ base: "20px" }}
                    p="5px"
                    rotate="45"
                    borderRadius="20px"
                    color="brand.600"
                    bgColor="brand.800"
                    position="absolute"
                    bottom="40%"
                    right="8%"
                    boxSize="1.3em"
                    transform="rotate(-45deg)"
                  ></ArrowForwardIcon>
                  <Box
                    h="250px"
                    w="200px"
                    bg="white"
                    m={{ base: "0px 0px 10px 0px" }}
                    borderWidth="0px"
                    position="relative"
                    borderRadius="20px"
                  >
                    <Box
                      h="30%"
                      w="39%"
                      bg="#3E3E3E"
                      borderRadius="20px 0px 0px 0px"
                      position="absolute"
                      right="-1%"
                      bottom="-1%"
                    >
                      <Box m="10px 10px">
                        <Flex color="white">
                          <Text
                            fontSize={{ base: "1.3rem" }}
                            fontWeight="600"
                            color="brand.800"
                          >
                            Content Creation
                          </Text>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                  <Text
                    color="white"
                    fontWeight={{ base: "200" }}
                    fontSize={{ base: "0.9rem" }}
                  >
                    Engage your audience with compelling content and consistent
                    management.
                  </Text>
                </Box>
              </Box>

              {/* Second Box */}
              <Box m={{ base: "20px auto" }} transform="rotate(-8deg)">
                <Box
                  padding={{ base: "30px" }}
                  bg="white"
                  w={{ base: "97%" }}
                  h="380px"
                  m={{ base: "20px auto" }}
                  borderRadius="30px"
                  position="relative"
                >
                  <Text
                    fontSize="1.8rem"
                    fontWeight="bold"
                    position="absolute"
                    right="8%"
                    top="5%"
                    color="#3E3E3E"
                  >
                    02
                  </Text>

                  <ArrowForwardIcon
                    w={{ base: "20px" }}
                    h={{ base: "20px" }}
                    p="5px"
                    rotate="45"
                    borderRadius="20px"
                    color="brand.800"
                    bgColor="brand.600"
                    position="absolute"
                    bottom="40%"
                    right="8%"
                    boxSize="1.3em"
                    transform="rotate(-45deg)"
                  ></ArrowForwardIcon>
                  <Box
                    h="250px"
                    w="200px"
                    bg="#3E3E3E"
                    m={{ base: "0px 0px 10px 0px" }}
                    borderWidth="0px"
                    position="relative"
                    borderRadius="20px"
                  >
                    <Box
                      h="30%"
                      w="39%"
                      bg="WHITE"
                      borderRadius="20px 0px 0px 0px"
                      position="absolute"
                      right="-1%"
                      bottom="-1%"
                    >
                      <Box m="10px 10px">
                        <Flex color="white">
                          <Text
                            fontSize={{ base: "1.3rem" }}
                            fontWeight="600"
                            color="brand.600"
                          >
                            Ads Production
                          </Text>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                  <Text
                    color="#3E3E3E"
                    fontWeight={{ base: "200" }}
                    fontSize={{ base: "0.9rem" }}
                  >
                    Drive results with targeted ads and data-driven insights
                    that maximize ROI.
                  </Text>
                </Box>
              </Box>

              {/*   Third Box */}

              <Box m={{ base: "20px auto" }}>
                <Box
                  padding={{ base: "30px" }}
                  bg="#3E3E3E"
                  w={{ base: "97%" }}
                  h="380px"
                  m={{ base: "20px auto" }}
                  borderRadius="30px"
                  position="relative"
                >
                  <Text
                    fontSize="1.8rem"
                    fontWeight="bold"
                    position="absolute"
                    right="8%"
                    top="5%"
                    color="white"
                  >
                    03
                  </Text>

                  <ArrowForwardIcon
                    w={{ base: "20px" }}
                    h={{ base: "20px" }}
                    p="5px"
                    rotate="45"
                    borderRadius="20px"
                    color="brand.600"
                    bgColor="brand.800"
                    position="absolute"
                    boxSize="1.3em"
                    bottom="40%"
                    right="8%"
                    transform="rotate(-45deg)"
                  ></ArrowForwardIcon>
                  <Box
                    h="250px"
                    w="200px"
                    bg="white"
                    m={{ base: "0px 0px 10px 0px" }}
                    borderWidth="0px"
                    position="relative"
                    borderRadius="20px"
                  >
                    <Box
                      h="30%"
                      w="39%"
                      bg="#3E3E3E"
                      borderRadius="20px 0px 0px 0px"
                      position="absolute"
                      right="-1%"
                      bottom="-1%"
                    >
                      <Box m="10px 10px">
                        <Flex color="white">
                          <Text
                            fontSize={{ base: "1.3rem" }}
                            fontWeight="600"
                            color="brand.800"
                          >
                            Branding Strategies
                          </Text>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                  <Text
                    color="white"
                    fontWeight={{ base: "200" }}
                    fontSize={{ base: "0.9rem" }}
                  >
                    Craft winning social media strategies that align with your
                    brand’s goals.
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* Recent Project Section
        This should be fetch from the database
      */}

      <Box p={{ base: "5vw" }}>
        <Flex flexDir={{ base: "column" }}>
          <Text color="brand.600">Recent Project</Text>
          <Text
            color="brand.900"
            fontSize={{ base: "2.3rem" }}
            fontWeight={{ base: "700" }}
            lineHeight={{ base: "1" }}
            textTransform={{ base: "uppercase" }}
          >
            Harnessing Digital Strategies for Optimal Marketing Success.
          </Text>
        </Flex>
        <Flex m={{ base: " 40px auto" }} flexWrap={{ base: "wrap" }}>
          {testimonial.map(() => (
            <Box
              w={{ base: "100vw" }}
              h={{ base: "80vw" }}
              m={{ base: "0px auto 20px auto" }}
              minH={{ base: "300px" }}
              bgColor="grey"
              bgGradient="linear(to-b, transparent, brand.900 90%,brand.900 100%)"
              borderRadius="20px"
            >
              <Flex
                justifyContent={{ base: "space-between" }}
                alignItems={{ base: "end" }}
                padding={{ base: "0px 20px 20px 20px" }}
                w={{ base: "100%" }}
                h={{ base: "100%" }}
              >
                <Text color="white">Project Name</Text>

                <ArrowForwardIcon
                  p="5px"
                  rotate="45"
                  borderRadius="20px"
                  color="brand.600"
                  bgColor="brand.800"
                  // position="absolute"
                  boxSize="2.3em"
                  // bottom="40%"
                  // right="8%"
                  transform="rotate(-45deg)"
                ></ArrowForwardIcon>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Testimonials  */}

      <Box p={{ base: "5vw" }}>
        <Flex flexDir="column">
          <Text fontSize={{ base: "2.3em" }} fontWeight={{ base: "700" }}>
            TESTIMONIALS
          </Text>
          {/* From the database */}

          <Flex flexDir="row" overflow="auto">
            {testimonial.map(() => (
              <Flex
                flexDir="column"
                ml={{ base: "10%" }}
                w={{ base: "80%" }}
                minW={{ base: "70vw" }}
              >
                <Text>
                  “This team has greatly enhanced our online presence and
                  conversion rates through their expert digital marketing
                  services. Their team's professionalism and effective
                  strategies have made a significant impact. Highly
                  recommended!”
                </Text>
                <Flex
                  w={{ base: "30%" }}
                  alignItems={{ base: "center" }}
                  justifyContent={{ base: "space-between" }}
                >
                  <Box
                    h={{ base: "1px" }}
                    w={{ base: "35%" }}
                    bgColor={{ base: "black" }}
                  ></Box>
                  <Text>Name</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>

      <Box m={{ base: "100px auto 50px 5vw" }}>
        <Flex flexDir={{ base: "column" }}>
          <Text color="brand.600">Blog</Text>
          <Text
            color="brand.900"
            fontSize={{ base: "2.3rem" }}
            fontWeight={{ base: "700" }}
            lineHeight={{ base: "1" }}
            textTransform={{ base: "uppercase" }}
          >
            Recent Blog
          </Text>
        </Flex>

        <Flex>
          <Box
            w={{ base: "70vw" }}
            h={{ base: "300px" }}
            bgColor={{ base: "grey" }}
            borderRadius={{base: "20px"}}
            mt={{base: "20px"}}
          ></Box>
        </Flex>
      </Box>
      {/* Contact Us */}
      <Box m={{ base: "50px auto auto 5vw" }}>
        <Flex flexDir={{ base: "column" }}>
          <Text fontSize={{ base: "2.3em" }} fontWeight={{ base: "700" }}>
            CONTACT US
          </Text>
          <Flex>
            <SocialIcon
              bgColor="black"
              url="https://instagram.com/growwithama"
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
