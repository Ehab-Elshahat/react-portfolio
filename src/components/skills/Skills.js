import { motion } from "framer-motion";
import "./skills.css";
import Skill from "./Skill";

import htmlImg from "../../assets/img/html.png";
import cssImg from "../../assets/img/css-3.png";
import javascriptImg from "../../assets/img/js.png";
import bootStrapImg from "../../assets/img/bootstrap.png";
import sassImg from "../../assets/img/sass.png";
import jqueryImg from "../../assets/img/jquery.png";
import reactImg from "../../assets/img/react.png";
import VueImg from "../../assets/img/Vue.png";
import gitImg from "../../assets/img/github.png";
import commandImg from "../../assets/img/command-line.png";

export default function Skills() {
  return (
    <motion.div
      className="container pt-5"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <h2 className="skills-title text-center text-light mb-4 mt-5 ml-5 bill display-4">
        My Skills
      </h2>
      <div className="skills">
        <div className="row">
          <Skill
            img={htmlImg}
            alt={"Html"}
            title={"HTML5"}
            desc={"HTML is the standard markup language for Web pages."}
          />

          <Skill
            img={cssImg}
            alt={"CSS"}
            title={"CSS"}
            desc={
              "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed."
            }
          />

          <Skill
            img={javascriptImg}
            alt={"javascriptImg"}
            title={"JavaScript"}
            desc={
              "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate           images,and pretty much everything else."
            }
          />

          <Skill
            img={bootStrapImg}
            alt={"Bootstrap"}
            title={"Bootstrap"}
            desc={
              "Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites."
            }
          />

          <Skill
            img={sassImg}
            alt={"Sass"}
            title={"Sass"}
            desc={"Sass is a CSS pre-processor."}
          />

          <Skill
            img={jqueryImg}
            alt={"Jquery"}
            title={"Jquery"}
            desc={"jQuery is a JavaScript Library."}
          />

          <Skill
            img={reactImg}
            alt={"React"}
            title={"React"}
            desc={"React is a JavaScript library for building user interfaces."}
          />

          <Skill
            img={VueImg}
            alt={"Vue"}
            title={"Vue"}
            desc={"Vue is a JavaScript library for building user interfaces."}
          />

          <Skill
            img={gitImg}
            alt={"GitHub"}
            title={"GitHub"}
            desc={
              "GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere."
            }
          />

          <Skill
            img={commandImg}
            alt={"Command Line"}
            title={"Command Line"}
            desc={
              "The command line is a text interface for your computer. It’s a program that takes in commands, which it passes on to the computers operating system to run."
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
