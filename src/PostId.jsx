import { useParams } from "react-router-dom";

const PostId = () => {
  let params = useParams();
  return <p>PostID: {params.postId}</p>;
};

export default PostId;
