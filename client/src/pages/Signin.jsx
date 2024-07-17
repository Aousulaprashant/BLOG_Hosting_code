import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider.js";
import { useNavigate } from "react-router-dom";

const Signin = ({ checkuserlogin }) => {
  const [account, toggleaccount] = useState("login");
  const navigate = useNavigate();

  const { setaccount } = useContext(DataContext);

  const signupinitalvalue = {
    name: "",
    email: "",
    password: "",
  };
  const [signupdetails, setsignupdetails] = useState(signupinitalvalue);

  const toggleAcc = () => {
    if (account === "login") {
      toggleaccount("singup");
    } else {
      toggleaccount("login");
    }
  };

  const setdetail = (e) => {
    setsignupdetails({ ...signupdetails, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${window.location.origin}/signup`, {
        ...signupdetails,
      });
      console.log(res.data);

      if (res.status === 400) {
        alert("Password should me atleast >6 charactres");
      } else if (res.status === 200) {
        localStorage.setItem("firstLogin", true);

        alert("signup sucess");
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${window.location.origin}/login`, {
        ...signupdetails,
      });

      if (res.status === 200) {
        alert("login sucess full");
        console.log(res.data);
        sessionStorage.setItem("accesstoken", `Barres ${res.data.accestoken}`);
        sessionStorage.setItem(
          "refreshtoken",
          `Barres ${res.data.refreshtoken}`
        );
        checkuserlogin(true);
        setaccount({ email: res.data.email });

        navigate("/");
      }

      console.log(res.status);
      // localStorage.setItem("token", res.data.token);
    } catch (er) {
      alert("Invalid Username or Password !!");
      console.log(er);
    }
  };
  return (
    <div className="">
      <div className="container login">
        {account === "login" ? (
          <form onSubmit={handlelogin}>
            <input
              name="email"
              className="input email"
              placeholder="Enter Your Email"
              onChange={setdetail}
            ></input>
            <br />
            <input
              name="password"
              className="input password"
              placeholder="Enter Your Password"
              onChange={setdetail}
            ></input>
            <br />
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
            <br />
            <p>-------------- or ----------------</p>
            <button className="toggle-btn" onClick={toggleAcc}>
              {" "}
              Create Account
            </button>
          </form>
        ) : (
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              name="name"
              className="input name"
              placeholder="Enter Your Name"
              onChange={setdetail}
            ></input>
            <br />
            <input
              name="email"
              type="email"
              className="input email"
              placeholder="Enter Your Email"
              onChange={setdetail}
            ></input>
            <br />
            <input
              name="password"
              type="password"
              className="input password"
              placeholder="Enter Your Password"
              onChange={setdetail}
            ></input>
            <br />
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
            <br />
            <p>-------------- or ----------------</p>
            <button className="toggle-btn" onClick={toggleAcc}>
              {" "}
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signin;
