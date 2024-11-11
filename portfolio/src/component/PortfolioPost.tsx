import { Box } from "@chakra-ui/react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProject } from "../services";
import { getProject } from "../services/project";

function PortfolioPost() {
  const { projectId } = useParams();
  const id = projectId!.substring(1);
  const [project, setProject] = useState<Array<IProject>>([]);
  
  useEffect(() => {
    async function fetchData() {
      const data = await getProject(id);
      console.log(data)
      return setProject(data!);
    }
    fetchData();
  }, [id]);
 
  return project!.length > 0 ? (
    <Box>
      <Header heading="EXPLORE MY BLOG" subheading="BLOG"></Header>
      {project!.map((data) => (
        <Box key={data._id}>{data.title}</Box>
      ))}
    </Box>
  ):(
    <Box>Loading...</Box>
  )
}

export default PortfolioPost;
