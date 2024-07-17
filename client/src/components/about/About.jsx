import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import img from "../IMG/MVM1-1.png";

const About = () => {
  return (
    <div>
      <div className="aboutbanner">
        <img src={img} />
      </div>
      <div className="aboutwrapper">
        <h3>About Me </h3>
        <p className="text">
          I am a passionate MERN stack developer. With a strong foundation in
          web development and a keen interest in creating dynamic and responsive
          applications, I am always eager to learn and implement new
          technologies.
          <br />
          If you are interested, you can view some of my rojects here
          <span className="icon-link">
            <a
              href="https://github.com/Aousulaprashant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
          </span>
        </p>
        <p className="text">
          Need something built or simply want to have chat? Reach out to me on
          <span className="icon-link">
            <a
              href="https://www.linkedin.com/in/prashanth-aousula-161b19224/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </span>
          or send me an Email
          <a
            href="mailto:prashanthchary91595@gmail.com?Subject=This is a subject"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaEnvelope className="icon" />
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
