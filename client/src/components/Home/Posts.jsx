import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../Home/Post.jsx";
import { useSearchParams, Link } from "react-router-dom";
export const Posts = () => {
  const [posts, setposts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const catagory = searchParams.get("category");
  useEffect(() => {
    const fetchposts = async () => {
      const currCategory = catagory ? catagory : "ALL";

      const responce = await axios.get(
        `${window.location.origin}/getAllPosts?category=${currCategory}`
      );
      if (responce.status === 200) {
        // console.log(responce.data);
        setposts(responce.data);
        // console.log(setposts);
      }
    };

    fetchposts();
  }, [catagory]);
  return (
    <>
      <div className="postslists">
        {posts && posts.length > 0 ? (
          posts.map((post) => {
            return (
              <Link
                to={`/details/${post._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Post post={post} />
              </Link>
            );
          })
        ) : (
          <div>No Data Available To Display</div>
        )}
      </div>
    </>
  );
};
{
}
