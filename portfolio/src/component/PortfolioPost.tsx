import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProject, IProjectImage } from "../services";
import { getProject, getProjectImage } from "../services/project";
import { ArrowBackIcon } from "@chakra-ui/icons";
import SimpleImageSlider from "react-simple-image-slider";

function PortfolioPost() {
  const { projectId } = useParams();
  const id = projectId!.substring(1);
  console.log(id);
  const [project, setProject] = useState<Array<IProject>>([]);
  const [projectImage, setProjectImage] = useState<IProjectImage>();

  useEffect(() => {
    async function fetchData() {
      const data = await getProject(id);
      console.log(await getProject(id));
      console.log(data);
      return setProject(data!);
    }
    fetchData().then(() => {
      fetchImage();
    });

    async function fetchImage() {
      const data = await getProjectImage(project);
      console.log(data);
      return setProjectImage(data!);
    }
  }, [id]);

  return project!.length > 0 ? (
    <Box>
      <Header heading="EXPLORE MY FEATURE WORK" subheading="PORTFOLIO"></Header>
      {project!.map((data) => (
        <Box
          w={{ base: "70vw" }}
          m={{ base: "50px auto", lg: "100px auto" }}
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
            h={{ base: "100px", md: "100px" }}
            bgColor="#444444"
            m={{ base: "20px auto" }}
          >
            <Flex
              flexDir={{ base: "column", sm: "row" }}
              w={{ base: "inherit", sm: "80%" }}
              h={{ base: "inherit", sm: "100%" }}
              m={{ base: "auto" }}
              justifyContent={{ base: "space-between" }}
              alignItems={{ base: "center", sm: "center" }}
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

                  <Flex flexWrap={{ base: "wrap" }} maxW={{ base: "250px" }}>
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

          <Box>
            
          </Box>
        </Box>
      ))}
    </Box>
  ) : (
    <Box>Loading...</Box>
  );
}

export default PortfolioPost;
