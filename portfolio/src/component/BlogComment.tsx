import React, { useEffect, useState } from "react";
import { IComment } from "../services";
import { Box, Flex, Text } from "@chakra-ui/react";

function BlogComment(props:IComment[]) {
    console.log(Object.values(props))
   
    const [comments, setComment] = useState<Array<IComment>>([]);

    useEffect(() => {
       
        return setComment(Object.values(props));
      }, [props])
  return comments.length > 0 ? (
    <>
      <Box>
        {comments.map((comment) => (
          <Box key={comment._key}>
            <Flex>
              <Text>{comment.name}</Text>
              <Text>{comment.comment}</Text>
            </Flex>
          </Box>
        ))}
      </Box>
    </>
  ) : (
    <Box></Box>
  );
}

export default BlogComment;
