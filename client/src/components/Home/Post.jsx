import React from "react";
import { Addellipsis } from "../../utils/common-utils.js";
const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  return (
    <div className="postcard">
      <div className="img">
        <img src={url} />
        <p>{post.categories}</p>
      </div>
      <h3>{post.title}</h3> <p>{post.name}</p>
      <p className="des">{Addellipsis(post.description, 100)}</p>
    </div>
  );
};

export default Post;
// import React from "react";

// const Post = () => {
//   return <div>Post</div>;
// };

// export default Post;
