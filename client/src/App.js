import React, { useState } from "react";
import Signin from "./pages/Signin";
import DataProvider from "./context/DataProvider";
import Home from "./components/Home/Home.jsx";
import CreatePost from "./components/createPost/CreatePost";
import Header from "./components/Header/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Detailview from "./components/details/Detailview.jsx";
import EditPost from "./components/createPost/EditPost.js";
import About from "./components/about/About.jsx";
import Contactus from "./components/contactus/Contactus.jsx";

const PrivateRoute = ({ checklogin, ...props }) => {
  return checklogin ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

const App = () => {
  const [checklogin, checkuserlogin] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/login"
              element={<Signin checkuserlogin={checkuserlogin} />}
            />
            <Route path="/" element={<PrivateRoute checklogin={checklogin} />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route
              path="/createpost"
              element={<PrivateRoute checklogin={checklogin} />}
            >
              <Route path="/createpost" element={<CreatePost />} />
            </Route>
            <Route
              path="/details/:id"
              element={<PrivateRoute checklogin={checklogin} />}
            >
              <Route path="/details/:id" element={<Detailview />} />
            </Route>
            <Route
              path="/About"
              element={<PrivateRoute checklogin={checklogin} />}
            >
              <Route path="/About" element={<About />} />
            </Route>
            <Route
              path="/contactUs"
              element={<PrivateRoute checklogin={checklogin} />}
            >
              <Route path="/contactUs" element={<Contactus />} />
            </Route>
            <Route
              path="/update/:id"
              element={<PrivateRoute checklogin={checklogin} />}
            >
              <Route path="/update/:id" element={<EditPost />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
