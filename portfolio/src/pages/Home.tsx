import { ArrowForwardIcon } from "@chakra-ui/icons";
import Header from "../component/Header";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import Footer from "../component/Footer";
import { useState, useEffect } from "react";
import { IBlogPost, IImages, IProject, ITestimonial } from "../services";
import { getAllPost, getTestimonial } from "../services/blog";
import { getAllProject } from "../services/project";
import { getImages } from "../services/image";

export default function Home() {
  const [post, setPost] = useState<Array<IBlogPost>>([]);
  const [project, setProject] = useState<Array<IProject> | undefined>([]);
  const [images, setImages] = useState<Array<IImages> | undefined>([]);
  const [testimonial, setTestimonial] = useState<
    Array<ITestimonial> | undefined
  >([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPost();
      setProject(await getAllProject());
      setTestimonial(await getTestimonial());
      setPost(data!);
      setImages(await getImages());
    }
    fetchData();
  }, []);

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
      <Box maxW={{ xl: "1400px" }} m={{ base: "auto" }}>
        <Flex
          w={{ base: "80vw", lg: "75vw" }}
          h={{ lg: "fit-content" }}
          m={{ base: "70px auto auto auto", sm: "70px auto auto auto" }}
          flexDir={{ base: "column", lg: "row" }}
          minH={{ base: "1120px", md: "1200px", lg: "fit-content" }}
          justifyContent={{ base: "space-between" }}
        >
          <Flex
            justifyContent={{ sm: "center", lg: "space-between" }}
            alignItems={{ sm: "center" }}
            flexDir={{ base: "column", lg: "row" }}
            w={{ sm: "inherit" }}
            // m={{sm:"auto"}}
            h={{ lg: "fit-content" }}
          >
            <Box
              bgImg={images?.at(0)?.profile.asset.url}
              w={{ base: "100%", lg: "55%" }}
              h={{ lg: "100%" }}
              minH={{
                base: "400px",
                sm: "600px",
                md: "700px",
                lg: "500px",
                xl: "600px",
              }}
              maxH={{ md: "800px" }}
              maxW={{ xl: "700px" }}
              bgPos={{ base: "center", md: "top", lg: "center" }}
              bgRepeat="no-repeat"
              bgSize={{ base: "cover" }}
              borderRadius="20px"
            ></Box>

            <Flex
              mt={{ base: "50px", lg: "0px" }}
              w={{ base: "100%", sm: "100%", md: "90%", lg: "40%" }}
              h={{ lg: "100%" }}
              minH={{ base: "fit-content", md: "fit-content", lg: "500px" }}
              maxH={{ sm: "650px", md: "fit-content", lg: "max-content" }}
              textAlign={{ base: "justify" }}
              flexDir={{ base: "column" }}
              justifyContent={{ base: "space-between" }}
              fontSize={{ base: "1.1rem", sm: "1.3rem", md: "1rem" }}
            >
              <Text fontWeight="800" color={{ base: "brand.600" }}>
                HI, I AM AMAZING IRECHUKWU A DIGITAL MARKETER
              </Text>
              <Text fontWeight="300" color={{ base: "brand.900" }}>
                I help brands and businesses grow their online presence with
                tailored content strategies that perfectly align with your
                brand. What started as a side hustle to pay the bills quickly
                became a passion. I fell in love with social media management,
                especially watching a brand grow into a profitable and
                influential presence. The thrill of transforming potential into
                success is what drives me to do this full-time.
              </Text>
              <Flex
                flexDir="row"
                color={{ base: "brand.900" }}
                w={{ base: "100%" }}
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
              <Button
                bgColor="brand.600"
                color="white"
                w={{ base: "100%", sm: "100%", lg: "50%" }}
                p={{ base: "15px 15px", sm: "20px 20px", lg: "10px" }}
                fontSize={{ base: "1.2rem", sm: "1.4rem", lg: "1rem" }}
                fontWeight={{ base: "500" }}
                borderRadius="10px"
                margin={{
                  base: "40px auto",
                  md: "50px  auto 0px auto",
                  lg: "0px",
                }}
              >
                Get Started
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <Box textAlign={{ base: "center" }} m={{ lg: "10% auto" }}>
          <Flex
            flexDir={{ base: "row" }}
            w={{ base: "90vw", sm: "80vw", lg: "55vw" }}
            justifyContent={{ base: "space-between" }}
            m={{ base: "0px auto" }}
            h="fit-content"
          >
            <Flex flexDir={{ base: "column" }} fontFamily="body">
              <Text
                fontSize={{ base: "3.5rem", lg: "2.8rem" }}
                fontWeight={{ base: "800" }}
                color="brand.600"
              >
                4
              </Text>
              <Text
                fontSize={{ base: "0.8rem", sm: "1rem" }}
                fontWeight={{ base: "100" }}
                color="brand.900"
              >
                Year Experience
              </Text>
            </Flex>
            <Box w="0.1px" bgColor="grey"></Box>
            <Flex flexDir={{ base: "column" }}>
              <Text
                fontSize={{ base: "3.5rem", lg: "2.8rem" }}
                fontWeight={{ base: "800" }}
                color="brand.600"
              >
                12
              </Text>
              <Text
                fontSize={{ base: "0.8rem", sm: "1rem" }}
                fontWeight={{ base: "100" }}
                color="brand.900"
              >
                Business
              </Text>
            </Flex>
            <Box w="0.1px" bgColor="grey"></Box>
            <Flex flexDir={{ base: "column" }}>
              <Text
                fontSize={{ base: "3.5rem", lg: "2.8rem" }}
                fontWeight={{ base: "800" }}
                color="brand.600"
              >
                20
              </Text>
              <Text
                fontSize={{ base: "0.8rem", sm: "1rem" }}
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
          w={{ base: "90vw", lg: "90vw" }}
          maxW={{ base: "1400px" }}
          m="100px  auto"
          p={{ base: "25px 25px 45px 25px" }}
          borderRadius={{ base: "20px" }}
        >
          <Box w="100%">
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              p={{ sm: "2% 6%", lg: "1.5% 4%" }}
              justify={{ base: "center", lg: "space-between" }}
            >
              <Text
                color="white"
                fontFamily="body"
                fontWeight="500"
                fontSize={{ base: "1rem", sm: "1.3rem" }}
              >
                Our Expertise
              </Text>
              <Text
                color="white"
                fontFamily="body"
                fontWeight="200"
                fontSize={{ base: "0.8rem", sm: "1.1rem", lg: "0.8rem" }}
                w={{ lg: "30%" }}
              >
                We provide tailored digital marketing services, from strategy
                and content creation to targeted ads and performance analysis,
                to help your brand thrive online.
              </Text>
            </Flex>
            <Flex
              p={{ lg: "1.5% 4%" }}
              flexDir={{ base: "column", lg: "row" }}
              w={{ lg: "100%" }}
            >
              {/* First Box */}
              <Box m={{ base: "20px auto" }} w={{ lg: "fit-content" }}>
                <Box
                  padding={{ base: "30px", sm: "8.5%", lg: "8%" }}
                  bg="#3E3E3E"
                  w={{ base: "97%", sm: "85%", lg: "100%" }}
                  h={{ base: "380px", sm: "55vh", lg: "" }}
                  minH={{ sm: "480px", lg: "400px" }}
                  maxH={{ sm: "500px", lg: "300px" }}
                  maxW={{ sm: "500px" }}
                  m={{ base: "20px auto" }}
                  borderRadius="30px"
                  position="relative"
                >
                  <Text
                    fontSize={{
                      base: "2rem",
                      sm: "2.5rem",
                    }}
                    fontWeight="bold"
                    position="absolute"
                    right="8%"
                    top={{ base: "5%", sm: "7%" }}
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
                    boxSize={{ base: "1.3em", sm: "2em" }}
                    transform="rotate(-45deg)"
                  ></ArrowForwardIcon>
                  <Box
                    h={{ base: "250px", sm: "80%" }}
                    w={{ base: "200px", sm: "80%" }}
                    bgImg={images?.at(0)?.service.at(0)?.asset.url}
                    bgPos={{ base: "center" }}
                    bgRepeat="no-repeat"
                    bgSize={{ base: "cover" }}
                    m={{ base: "0px 0px 10px 0px" }}
                    borderWidth="0px"
                    position="relative"
                    borderRadius="20px"
                  >
                    <Box
                      h={{ sm: "30%", lg: "27%" }}
                      w="39%"
                      bg="#3E3E3E"
                      borderRadius="20px 0px 0px 0px"
                      position="absolute"
                      right="-1%"
                      bottom="-1%"
                      p={{ lg: "5px auto auto auto" }}
                    >
                      <Box m="10px 10px">
                        <Flex color="white">
                          <Text
                            fontSize={{
                              base: "fontclamp(1rem, 1.8rem, 2.5rem)",
                              sm: "2.2rem",
                              lg: "1.7rem",
                            }}
                            fontWeight="600"
                            lineHeight={{ sm: "1", lg: "0.9" }}
                            color="brand.800"
                            textAlign={{ lg: "start" }}
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
                    fontSize={{ base: "0.9rem", sm: "1.1rem", lg: "0.9rem" }}
                  >
                    Engage your audience with compelling content and consistent
                    management.
                  </Text>
                </Box>
              </Box>

              {/* Second Box */}
              <Box
                m={{ base: "20px auto" }}
                transform="rotate(-8deg)"
                w={{ lg: "fit-content" }}
              >
                <Box
                  padding={{ base: "30px", sm: "8.5%", lg: "8%" }}
                  bg="white"
                  w={{ base: "97%", sm: "85%", lg: "100%" }}
                  h={{ base: "380px", sm: "55vh", lg: "" }}
                  minH={{ sm: "480px", lg: "400px" }}
                  maxH={{ sm: "500px", lg: "300px" }}
                  maxW={{ sm: "500px" }}
                  m={{ base: "20px auto" }}
                  borderRadius="30px"
                  position="relative"
                >
                  <Text
                    fontSize={{
                      base: "2rem",
                      sm: "2.5rem",
                    }}
                    fontWeight="bold"
                    position="absolute"
                    right="8%"
                    top={{ base: "5%", sm: "7%" }}
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
                    boxSize={{ base: "1.3em", sm: "2em" }}
                    transform="rotate(-45deg)"
                  ></ArrowForwardIcon>
                  <Box
                    h={{ base: "250px", sm: "80%" }}
                    w={{ base: "200px", sm: "80%" }}
                    bgImg={images?.at(0)?.service.at(2)?.asset.url}
                    bgPos={{ base: "center" }}
                    bgRepeat="no-repeat"
                    bgSize={{ base: "cover" }}
                    m={{ base: "0px 0px 10px 0px" }}
                    borderWidth="0px"
                    position="relative"
                    borderRadius="20px"
                  >
                    <Box
                      h={{ sm: "30%", lg: "27%" }}
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
                            fontSize={{
                              base: "fontclamp(1rem, 1.8rem, 2.5rem)",
                              sm: "2.2rem",
                              lg: "1.5rem",
                            }}
                            fontWeight="600"
                            lineHeight={{ sm: "1", lg: "0.9" }}
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
                    fontSize={{ base: "0.9rem", sm: "1.1rem", lg: "0.9rem" }}
                  >
                    Drive results with targeted ads and data-driven insights
                    that maximize ROI.
                  </Text>
                </Box>
              </Box>

              {/*   Third Box */}

              <Box m={{ base: "20px auto" }}>
                <Box
                  padding={{ base: "30px", sm: "8.5%", lg: "8%" }}
                  bg="#3E3E3E"
                  w={{ base: "97%", sm: "85%", lg: "100%" }}
                  h={{ base: "380px", sm: "55vh", lg: "" }}
                  minH={{ sm: "480px", lg: "400px" }}
                  maxH={{ sm: "500px", lg: "300px" }}
                  maxW={{ sm: "500px" }}
                  m={{ base: "20px auto" }}
                  borderRadius="30px"
                  position="relative"
                >
                  <Text
                    fontSize={{
                      base: "2rem",
                      sm: "2.5rem",
                    }}
                    fontWeight="bold"
                    position="absolute"
                    right="8%"
                    top={{ base: "5%", sm: "7%" }}
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
                    boxSize={{ base: "1.3em", sm: "2em" }}
                    bottom="40%"
                    right="8%"
                    transform="rotate(-45deg)"
                  ></ArrowForwardIcon>
                  <Box
                    h={{ base: "250px", sm: "80%" }}
                    w={{ base: "200px", sm: "80%" }}
                    bg="white"
                    bgImg={images?.at(0)?.service.at(1)?.asset.url}
                    bgPos={{ base: "center" }}
                    bgRepeat="no-repeat"
                    bgSize={{ base: "cover" }}
                    m={{ base: "0px 0px 10px 0px" }}
                    borderWidth="0px"
                    position="relative"
                    borderRadius="20px"
                  >
                    <Box
                      h={{ sm: "30%", lg: "27%" }}
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
                            fontSize={{
                              base: "fontclamp(1rem, 1.8rem, 2.5rem)",
                              sm: "2.2rem",
                              lg: "1.5rem",
                            }}
                            fontWeight="600"
                            lineHeight={{ sm: "1" }}
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
                    fontSize={{ base: "0.9rem", sm: "1.1rem", lg: "0.9rem" }}
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

      <Box p={{ base: "5vw", sm: "10vw" }}>
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
          {project!.map((data) => (
            <Box
              w={{ base: "100vw", lg: "38vw" }}
              h={{ base: "80vw" }}
              m={{
                base: "0px auto 20px auto",
                sm: "0px auto 30px auto",
                lg: "0px auto 40px auto",
              }}
              minH={{ base: "300px" }}
              maxH={{ sm: "500px" }}
              bgImg={data.images.at(0)!.asset.url}
              bgPos="center"
              bgSize="cover"
              borderRadius="20px"
            >
              <Flex
                justifyContent={{ base: "space-between" }}
                alignItems={{ base: "end" }}
                padding={{ base: "0px 20px 20px 20px" }}
                w={{ base: "100%" }}
                h={{ base: "100%" }}
              >
                <Box
                  bgColor="brand.900"
                  w={{ base: "fit-content" }}
                  p={{ base: "2% 4%" }}
                  borderRadius={{ base: "15px" }}
                  color="white"
                  fontWeight="300"
                >
                  <Text>{data.title}</Text>
                </Box>

                <ArrowForwardIcon
                  p="5px"
                  rotate="45"
                  borderRadius="20px"
                  color="brand.600"
                  bgColor="brand.800"
                  boxSize="2.3em"
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
            {testimonial!.map((data) => (
              <Flex
                flexDir="column"
                ml={{ base: "10%" }}
                w={{ base: "80%", md: "60%" }}
                minW={{ base: "70vw", md: "50vw", lg: "40vw" }}
              >
                <Text>{data.title}</Text>
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
                  <Text>{data.title}</Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>

      {/* 
      Blogs
      */}

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

        <Flex flexDir="row" overflow="auto">
          {post.map((data) => (
            <Box
              w={{ base: "70vw", md: "50vw" }}
              minW={{ base: "300px" }}
              maxW={{ lg: "500px" }}
              h={{ base: "300px", md: "450px" }}
              bgColor={{ base: "grey" }}
              bgImg={data.mainImage.asset.url}
              bgSize="cover"
              bgRepeat="no-repeat"
              bgPos="center"
              borderRadius={{ base: "20px" }}
              mt={{ base: "20px" }}
              ml={{ base: "10px", sm: "20px" }}
              p={{ base: "5%", lg: "2%" }}
            >
              <Flex
                flexDir={{ base: "column" }}
                justify={{ base: "space-between" }}
                h={{ base: "100%" }}
              >
                <Box
                  bgColor="brand.900"
                  w={{ base: "fit-content" }}
                  p={{ base: "2% 4%" }}
                  borderRadius={{ base: "15px" }}
                  color="white"
                  fontWeight="300"
                >
                  <Text>
                    {new Date(data.publishedAt!).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Text>
                </Box>
                <Box
                  bgColor="brand.900"
                  w={{ base: "fit-content" }}
                  p={{ base: "2% 4%" }}
                  borderRadius={{ base: "15px" }}
                  color="white"
                  fontWeight="300"
                >
                  <Text>{data.title}</Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
      {/* Contact Us */}
      <Box m={{ base: "50px auto 70px 5vw" }} w="90%">
        <Flex
          w="100%"
          flexDir={{ base: "column", md: "row" }}
          justifyContent={{ md: "space-between" }}
        >
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

      <Footer></Footer>
    </>
  );
}
