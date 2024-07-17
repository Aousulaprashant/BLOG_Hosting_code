import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { DataContext } from "../../context/DataProvider";
import Comments from "./comments/Comments";

const Detailview = () => {
  const [post, setpost] = useState({});

  const { id } = useParams();

  const { account } = useContext(DataContext);
  console.log(account.email);

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const fetchDetails = async () => {
      const responce = await axios.get(
        `${window.location.origin}/getPostbyId`,
        {
          params: { id: id },
        }
      );

      if (responce.status === 200) {
        setpost(responce.data);

        // alert("sucessfull ");
      } else {
        alert("error");
      }
    };
    fetchDetails();
  }, []);

  const deletepost = async () => {
    const responce = await axios.delete(
      `${window.location.origin}/deletePost`,
      {
        params: { id: id },
      }
    );

    if (responce.status === 200) {
      console.log("deleted sucessfully");
    } else {
      console.log("error");
    }
  };
  return (
    <div className="post-container">
      <h2 className="post-title">{post.title}</h2>
      {post.picture ? (
        <img
          src={post.picture}
          alt="Post"
          className="post-image"
          style={{
            display: "block",
            margin: "auto",
          }}
        />
      ) : (
        ""
      )}
      <div className="icons" style={{ float: "right" }}>
        {account.email === post.name && (
          <>
            <Link to={`/update/${post._id}`}>
              <MdEdit size={25} className="editicon" />
            </Link>
            <MdDelete size={25} className="deleteicon" onClick={deletepost} />
          </>
        )}
      </div>
      <h4 className="post-author">Posted by {post.name}</h4>
      <p className="post-description">{post.description}</p>
      <p className="post-date">
        Posted on {new Date(post.createdDate).toDateString()}
      </p>
      <p className="post-category">Category: {post.categories}</p>

      <div className="comments">
        <Comments post={post} />
      </div>
    </div>
  );
};

export default Detailview;
