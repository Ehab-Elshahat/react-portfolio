import React from "react";
import aboutPhoto from "../../assets/img/header-img.png";
import { motion } from "framer-motion";
import "./about.css";
const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="container d-sm-block d-md-flex align-items-center h-100">
        <div className="about-left ">
          <div className="left-img">
            <img src={aboutPhoto} alt="aboutPhoto" />
          </div>
          <div className="about-social">
            <a
              className="face"
              href="https://www.facebook.com/ehap.hoba.1"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              className="github"
              href="https://github.com/Ehab-Elshahat?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/feed/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className="left-desc">
            <h3>Front-end Developer</h3>
            <h2>Ehab Elshahat</h2>
          </div>
        </div>

        <div className="about-right">
          <h2 className="pb-3 bill">Biography</h2>
          <p>
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from Egypt. I code and create web elements for
            amazing people around the world. I like work with new people. New
            people new Experiences.
          </p>
          <div className="contact-info">
            <ul>
              <li>
                <span>Name:</span>Ehab Elshahat
              </li>
              <li>
                <span>Birthday:</span>1/11/1989
              </li>
              <li>
                <span>Age:</span>34 Years
              </li>
              <li>
                <span>Address:</span>Egypt Kafr El-shikh
              </li>
            </ul>
            <ul>
              <li>
                <span>Phone:</span>(+2)01025198925
              </li>
              <li>
                <span>Email:</span>ehabelshohat@yahoo.com
              </li>
              <li>
                <span>Freelance:</span>Available
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
