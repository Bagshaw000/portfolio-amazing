import { Box, Flex, IconButton, Spinner, Text } from "@chakra-ui/react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProject, IProjectImage } from "../services";
import { getProject, getProjectImage } from "../services/project";
import { ArrowBackIcon } from "@chakra-ui/icons";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "./Footer";

function PortfolioPost() {
  const { projectId } = useParams();
  const id = projectId!.substring(1);
  console.log(id);
  const [project, setProject] = useState<Array<IProject>>([]);
  const [projectImage, setProjectImage] = useState<IProjectImage>();

  useEffect(() => {
    async function fetchData() {
      const data = await getProject(id);
      // console.log(await getProject(id));
      console.log(data);
      return setProject(data!);
    }
    fetchData().then(() => {
      fetchImage();
    });
//fix this image issue
    async function fetchImage() {
      const data = await getProjectImage(project);
      console.log(data);
      return setProjectImage(data!);
    }
  }, [id, project]);

  return project!.length > 0 ? (
    <Box>
      <Header heading="EXPLORE MY FEATURE WORK" subheading="PORTFOLIO"></Header>
      {project!.map((data) => (
        <Box
          w={{ base: "70vw" }}
          m={{ base: "50px auto" }}
          maxW="1500px"
          key={data._id}
        >
          <Link to="/portfolio">
            <IconButton
              onClick={() => {
                console.log("clicked");
              }}
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

          <Text
            textAlign={{ base: "center" }}
            m={{ base: "20px auto" }}
            fontSize={{ base: "20px", md: "25px" }}
            fontWeight={{ base: "600" }}
          >
            {" "}
            {data.title}
          </Text>

          <Box
            width={{ base: "inherit", sm: "inherit" }}
            margin={{ base: "auto" }}
            textAlign={{ base: "center" }}
          >
            <SimpleImageSlider
              images={projectImage!.images}
              width={"inherit"}
              height={504}
              showNavs={true}
              showBullets={true}
              loop={true}
              slideDuration={0.5}
            />
          </Box>

          <Box
            h={{ base: "fit-content", md: "100px" }}
            bgColor="#444444"
            m={{ base: "20px auto" }}
            p={{ base: "20px 50px", md: "20px 0px" }}
          >
            <Flex
              flexDir={{ base: "column", md: "row" }}
              w={{ base: "inherit", sm: "85%" }}
              h={{ base: "inherit", sm: "100%" }}
              m={{ base: "auto" }}
              minH={{ base: "250px" }}
              justifyContent={{ base: "space-between" }}
              alignItems={{ base: "start", sm: "start" }}
            >
              <Box>
                <Flex flexDir={{ base: "column" }}>
                  <Text
                    color="#AFADAD"
                    fontSize={{ base: "0.85rem" }}
                    fontWeight={{ base: "400" }}
                  >
                    Client
                  </Text>
                  <Text color="white" fontWeight={{ base: "400" }}>
                    {data.client}
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex flexDir={{ base: "column" }}>
                  <Text
                    color="#AFADAD"
                    fontSize={{ base: "0.85rem" }}
                    fontWeight={{ base: "400" }}
                  >
                    Category
                  </Text>
                  <Text color="white" fontWeight={{ base: "400" }}>
                    {data.category}
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex flexDir={{ base: "column" }}>
                  <Text
                    color="#AFADAD"
                    fontSize={{ base: "0.85rem" }}
                    fontWeight={{ base: "400" }}
                  >
                    Duration
                  </Text>
                  <Text color="white" fontWeight={{ base: "400" }}>
                    {data.duration} Months
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex flexDir={{ base: "column" }} maxW={{ base: "450px" }}>
                  <Text
                    color="#AFADAD"
                    fontSize={{ base: "0.85rem" }}
                    fontWeight={{ base: "400" }}
                  >
                    Tools
                  </Text>

                  <Flex flexWrap={{ base: "wrap" }} maxW={{ base: "150px" }}>
                    {data.tools.map((data) => (
                      <Text
                        fontWeight={{ base: "400" }}
                        color="white"
                        mr={{ base: "5px" }}
                     
                      >
                        {data}
                      </Text>
                    ))}
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box
            color="white"
            bgColor="#444444"
            p={{ base: "50px 50px" }}
            minH={{ base: "250px" }}
          >
            <Text fontSize={{ base: "2.5rem" }} fontWeight={{ base: "500" }}>
              {" "}
              Overview
            </Text>
            <Text color="#AFADAD" fontSize={{ base: "0.95em" }}>
              {data.overview}
            </Text>
          </Box>
        </Box>
      ))}
      <Footer></Footer>
    </Box>
  ) : (
    <Box>
      <Header heading="EXPLORE MY FEATURE WORK" subheading="PORTFOLIO"></Header>
      <Box textAlign={{ base: "center" }} m={{ base: "100px auto" }} w={{ base: "fit-content" }}>
        <Spinner
          size={{ base: "xl" }}
          color="teal.500"
          thickness="10px"
          speed="0.8s"
          margin={{ base: "auto" }}
        />
        <Text fontSize={{ base: "1.5rem" }} color="colorPalette.600">
          Loading...
        </Text>
      </Box>
      <Footer></Footer>
    </Box>
  );
}

export default PortfolioPost;
