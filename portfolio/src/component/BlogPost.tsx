import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "./Header";
import { IBlogPost } from "../services";

function BlogPost(props: IBlogPost) {
  // const { blogId } = useParams();
  const [posts, setPost] = useState<IBlogPost>();
  // console.log(blogId);

  useEffect(() => {
   setPost(props);
  //  console.log(props)
  }, [props]);

  return posts?._id !== null ? (
    <Box>
      <Header heading="EXPLORE MY BLOG" subheading="BLOG"></Header>
      <Box>
        <Box>{posts?._id}</Box>
      </Box>
    </Box>
  ) : (
    <Box>
      <Header heading="EXPLORE MY BLOG" subheading="BLOG"></Header>
    </Box>
  );
}

export default BlogPost;
