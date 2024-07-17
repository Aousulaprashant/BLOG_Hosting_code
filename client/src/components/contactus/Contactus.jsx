import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import img from "../IMG/contactme.jpg";

const About = () => {
  return (
    <div>
      <div className="contactbanner">
        <img src={img} />
      </div>
      <div className="contactwrapper">
        <p>
          I am always excited to connect with fellow developers, potential
          collaborators, and anyone interested in my work. Feel free to reach
          out to me through the following channels:
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/Aousulaprashant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/prashanth-aousula-161b19224/"
              target="_blank"
              rel="noopener noreferrer
            "
            >
              <FaLinkedin /> Linkedin
            </a>
          </li>
          <li>
            <a
              href="mailto:prashanthchary91595@gmail.com
            "
            >
              <FaEnvelope /> Email
            </a>
          </li>
        </ul>
        <h4>Wanna Know More about me</h4>
        <p>
          Check my{" "}
          <a href="https://aousulaprashanth-portfolio.netlify.app/">
            Portfolio
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
