import { motion } from "framer-motion";
import "./skills.css";

import htmlImg from "../../assets/img/html.png"
import cssImg from "../../assets/img/css-3.png"
import javascriptImg from "../../assets/img/js.png"
import bootStrapImg from "../../assets/img/bootstrap.png"
import sassImg from "../../assets/img/sass.png";
import jqueryImg from "../../assets/img/jquery.png"
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
          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="skill-box p-4 rounded text-center">
              <div className="skill-img text-center">
                <img src={htmlImg} alt="html" className="img-fluid w-25" />
              </div>
              <div className="skill-title">
                <h3 className=" my-4 h2">HTML5</h3>
              </div>
              <div className="skill-desc">
                <p className="lead ">
                  HTML is the standard markup language for Web pages.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="skill-box p-4 rounded text-center">
              <div className="skill-img text-center">
                <img src={cssImg} alt="CSS" className="img-fluid w-25" />
              </div>
              <div className="skill-title">
                <h3 className=" my-4 h2">CSS</h3>
              </div>
              <div className="skill-desc">
                <p className="lead ">
                  CSS is the language we use to style an HTML document. CSS
                  describes how HTML elements should be displayed.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="skill-box p-4 rounded text-center">
              <div className="skill-img text-center">
                <img
                  src={javascriptImg}
                  alt="JavaScript"
                  className="img-fluid w-25"
                />
              </div>
              <div className="skill-title">
                <h3 className=" my-4 h2">JavaScript</h3>
              </div>
              <div className="skill-desc">
                <p className="lead ">
                  JavaScript is a scripting language that enables you to create
                  dynamically updating content, control multimedia, animate
                  images, and pretty much everything else.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="skill-box p-4 rounded text-center">
              <div className="skill-img text-center">
                <img
                  src={bootStrapImg}
                  alt="Bootstrap"
                  className="img-fluid w-25"
                />
              </div>
              <div className="skill-title">
                <h3 className=" my-4 h2">Bootstrap</h3>
              </div>
              <div className="skill-desc">
                <p className="lead ">
                  Bootstrap is the most popular HTML, CSS, and JavaScript
                  framework for developing responsive, mobile-first websites.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="skill-box p-4 rounded text-center">
              <div className="skill-img text-center">
                <img src={sassImg} alt="Sass" className="img-fluid w-25" />
              </div>
              <div className="skill-title">
                <h3 className=" my-4 h2">Sass</h3>
              </div>
              <div className="skill-desc">
                <p className="lead ">Sass is a CSS pre-processor.</p>
              </div>
            </div>
          </div>

          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="skill-box p-4 rounded text-center">
              <div className="skill-img text-center">
                <img src={jqueryImg} alt="Jquery" className="img-fluid w-25" />
              </div>
              <div className="skill-title">
                <h3 className=" my-4 h2">Jquery</h3>
              </div>
              <div className="skill-desc">
                <p className="lead ">jQuery is a JavaScript Library.</p>
              </div>
            </div>
          </div>
          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="skill-box p-4 rounded text-center">
              <div className="skill-img text-center">
                <img src={reactImg} alt="React" className="img-fluid w-25" />
              </div>
              <div className="skill-title">
                <h3 className=" my-4 h2">Reactjs</h3>
              </div>
              <div className="skill-desc">
                <p className="lead ">
                  React is a JavaScript library for building user interfaces.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="skill-box p-4 rounded text-center">
              <div className="skill-img text-center">
                <img src={VueImg} alt="Vuejs" className="img-fluid w-25" />
              </div>
              <div className="skill-title">
                <h3 className=" my-4 h2">Vuejs</h3>
              </div>
              <div className="skill-desc">
                <p className="lead ">
                  Vue is a JavaScript library for building user interfaces.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="skill-box p-4 rounded text-center">
              <div className="skill-img text-center">
                <img src={gitImg} alt="GitHub" className="img-fluid w-25" />
              </div>
              <div className="skill-title">
                <h3 className=" my-4 h2">GitHub</h3>
              </div>
              <div className="skill-desc">
                <p className="lead ">
                  GitHub is a code hosting platform for version control and
                  collaboration. It lets you and others work together on
                  projects from anywhere.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
            <div className="skill-box p-4 rounded text-center">
              <div className="skill-img text-center">
                <img
                  src={commandImg}
                  alt="Command Line"
                  className="img-fluid w-25"
                />
              </div>
              <div className="skill-title">
                <h3 className=" my-4 h2">Command Line</h3>
              </div>
              <div className="skill-desc">
                <p className="lead ">
                  The command line is a text interface for your computer. It’s a
                  program that takes in commands, which it passes on to the
                  computers operating system to run.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
