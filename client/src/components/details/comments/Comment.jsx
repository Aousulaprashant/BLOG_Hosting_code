import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { DataContext } from "../../../context/DataProvider.js";
import axios from "axios";

const Comment = ({ comment, settoggle }) => {
  const { account } = useContext(DataContext);

  const removeComment = (e) => {
    e.preventDefault();
    const removedapi = async () => {
      const res = await axios.delete(
        `${window.location.origin}/deleteComment`,
        {
          data: { _id: comment._id },
        }
      );

      if (res.status === 200) {
        settoggle((prevState) => !prevState);
        console.log("deleted sucefully");
      }
    };

    removedapi();
  };
  return (
    <div className="comment">
      <div className="comment-header">
        <p>{comment.name}</p>
        <p>{new Date(comment.date).toDateString()}</p>
        {comment.name === account.email && (
          <MdDelete style={{ marginLeft: "auto" }} onClick={removeComment} />
        )}
      </div>
      <div className="comment-body">
        <h3>{comment.comments}</h3>
      </div>
    </div>
  );
};

export default Comment;
