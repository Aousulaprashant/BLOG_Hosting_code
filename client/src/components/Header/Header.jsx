import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
