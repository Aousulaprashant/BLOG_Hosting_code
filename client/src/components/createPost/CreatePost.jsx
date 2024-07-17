import React, { useContext, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider.js";
import { getaccesstoken } from "../../utils/common-utils.js";

import axios from "axios";

const CreatePost = () => {
  const currentaccesstoken = getaccesstoken();
  const inialPost = {
    titlle: "",
    description: "",
    picture: "",
    email: "",
    catagory: "",
    accesstoken: currentaccesstoken,
    date: new Date(),
  };

  const { account } = useContext(DataContext);
  const [post, setpost] = useState(inialPost);
  const [file, setfile] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const handlechange = (e) => {
    setpost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async (e) => {
    e.preventDefault();
    let res = await axios.post(`${window.location.origin}/postBlog`, post);
    if (res.status === 200) {
      alert("published sucessfull");
      localStorage.setItem("accessToken", currentaccesstoken);
      navigate("/", { state: { accessToken: currentaccesstoken } });
    } else {
      console.log("error in posting saving");
    }
  };
  useEffect(() => {
    const getimage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const responce = await axios.post(
          `${window.location.origin}/file/uploadimage`,
          data
        );

        post.picture = responce.data;
      }
    };
    getimage();
    post.email = account.email;
    post.catagory = location.search?.split("=")[1] || "All";

    console.log(post);
  }, [file]);
  return (
    <div className="createpost">
      <img src={url} />

      <div>
        <form>
          <label htmlFor="fileinput">
            <IoIosAddCircle size={30} color="gray" />
          </label>
          <input
            type="file"
            id="fileinput"
            style={{ display: "none" }}
            onChange={(e) => setfile(e.target.files[0])}
          />

          <input
            type="text"
            placeholder="Title"
            style={{
              marginLeft: "30px",
              padding: "10px",
              border: "none",
              borderBottom: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
            }}
            name="tittle"
            onChange={(e) => {
              handlechange(e);
            }}
          />
          <br />
          <textarea
            placeholder="Description"
            style={{
              marginTop: "30px",
              padding: "20px",
              border: "none",
              borderBottom: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
              width: "600px",
              minHeight: "200px", // Adjust as needed
            }}
            name="decription"
            onChange={(e) => {
              handlechange(e);
            }}
          />
          <button
            onClick={savePost}
            type="submit"
            className="publish-btn"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0, 123, 255, 0.2)",
            }}
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
