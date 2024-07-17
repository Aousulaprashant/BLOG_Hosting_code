import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/DataProvider";
import axios from "axios";
import Comment from "./Comment";

const initalvalues = {
  name: "",
  postId: "",
  comments: "",
  date: new Date(),
};
const Comments = ({ post }) => {
  const { account } = useContext(DataContext);
  const url = "https://static.thenounproject.com/png/12017-200.png";
  const [comment, setcomment] = useState(initalvalues);
  const [listcomments, setListcomments] = useState([]);
  const [toggle, settoggle] = useState(false);

  const handlechange = (e) => {
    const value = e.target.value;

    setcomment({
      name: account.email,
      postId: post._id,
      comments: value,
      date: new Date(),
    });
  };

  useEffect(() => {
    console.log(post);
    const getComments = async () => {
      const res = await axios.get(`${window.location.origin}/getAllcomments`, {
        params: { postId: post._id },
      });
      setListcomments(res.data);

      if (res.status === 200) {
        console.log(listcomments);
      } else {
        alert("error feching coments");
      }
    };

    getComments();
  }, [post, comment, toggle]);

  const addcomment = async (e) => {
    e.preventDefault();

    const responce = await axios.post(
      `${window.location.origin}/addcomment`,
      comment
    );

    console.log(comment);

    if (responce.status === 200) {
      setcomment(initalvalues);
      alert("success full");
    }
  };
  return (
    <div>
      <div className="write-comment">
        <img src={url}></img>
        <textarea
          onChange={handlechange}
          value={comment.comments}
          placeholder="Whats in Your Mind"
          rows={10}
        />
        <button onClick={addcomment}>Post</button>
      </div>
      <div className="read-comments">
        {listcomments && listcomments.length > 0
          ? listcomments.map((comment, index) => {
              return (
                <Comment key={index} comment={comment} settoggle={settoggle} />
              );
            })
          : "N o  c o m m e n t s Y e t"}
      </div>
    </div>
  );
};

export default Comments;
