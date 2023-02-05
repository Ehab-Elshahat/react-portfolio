import { motion } from "framer-motion";
import "./projects.css";
import imgOne from "../../assets/img/project-1.png";
import imgTow from "../../assets/img/project-2.png";
import imgThree from "../../assets/img/project-3.png";
import imgFour from "../../assets/img/project-4.png";
import imgFive from "../../assets/img/project-5.png";
import imgSix from "../../assets/img/project-6.png";
import imgSeven from "../../assets/img/project-7.png";
import img8 from "../../assets/img/project-8.png";
export default function Projects() {
  return (
    <motion.div
      className="container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <h2 className="skills-title text-light mb-4 mt-5 ml-5 bill display-4">
        My Projects
      </h2>
      <div className="row text-center text-light mt-5">
        <div className=" col-lg-6 col-sm-12 ">
          <div className="project position-relative rounded-3 overflow-hidden mb-4">
            <div className="project-img">
              <img src={imgOne} alt="Project img" className="rounded w-100" />
            </div>
            <div className="overlay d-flex align-items-center justify-content-center  p-3">
              <div className="over-content ">
                <h2 className="project-name  text-center">Special Design</h2>
                <ul className="tech  list-unstyled mb-2 ">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <a
                  className="live-preview  text-decoration-none"
                  href="https://ehab-elshahat.github.io/Special-Desgin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Preview: </span>
                  <i className="fa-solid fa-link "></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-lg-6 col-sm-12 ">
          <div className="project position-relative rounded-3 overflow-hidden mb-4">
            <div className="project-img">
              <img src={imgTow} alt="Project img" className="rounded w-100" />
            </div>
            <div className="overlay d-flex align-items-center justify-content-center  p-3">
              <div className="over-content ">
                <h2 className="project-name  text-center">E-commerce</h2>
                <ul className="tech  list-unstyled mb-2 ">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <a
                  className="live-preview  text-decoration-none"
                  href="https://ehab-elshahat.github.io/ecommerce1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Preview: </span>
                  <i className="fa-solid fa-link "></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-lg-6 col-sm-12">
          <div className="project position-relative rounded-3 overflow-hidden mb-4">
            <div className="project-img">
              <img src={imgThree} alt="Project img" className="rounded w-100" />
            </div>
            <div className="overlay d-flex align-items-center justify-content-center  p-3">
              <div className="over-content ">
                <h2 className="project-name  text-center">OnNext</h2>
                <ul className="tech  list-unstyled mb-2 ">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </ul>
                <a
                  className="live-preview  text-decoration-none"
                  href="https://ehab-elshahat.github.io/OnNext/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Preview: </span>
                  <i className="fa-solid fa-link "></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-lg-6 col-sm-12 ">
          <div className="project position-relative rounded-3 overflow-hidden mb-4">
            <div className="project-img">
              <img src={imgFour} alt="Project img" className="rounded w-100" />
            </div>
            <div className="overlay d-flex align-items-center justify-content-center  p-3">
              <div className="over-content ">
                <h2 className="project-name  text-center">
                  My Previous Portfolio
                </h2>
                <ul className="tech  list-unstyled mb-2 ">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>jQuery</li>
                  <li>Bootstrap</li>
                </ul>
                <a
                  className="live-preview  text-decoration-none"
                  href="https://ehab-elshahat.github.io/AboAnas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Preview: </span>
                  <i className="fa-solid fa-link "></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-lg-6 col-sm-12 ">
          <div className="project position-relative rounded-3 overflow-hidden mb-4">
            <div className="project-img">
              <img src={imgFive} alt="Project img" className=" rounded w-100" />
            </div>
            <div className="overlay d-flex align-items-center justify-content-center  p-3">
              <div className="over-content ">
                <h2 className="project-name  text-center">Multi-step form</h2>
                <ul className="tech  list-unstyled mb-2 ">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>javaScript</li>
                </ul>
                <a
                  className="live-preview  text-decoration-none"
                  href="https://ehab-elshahat.github.io/Frontend-Mentor-Multi-step-form/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Preview: </span>
                  <i className="fa-solid fa-link "></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-lg-6 col-sm-12">
          <div className="project position-relative rounded-3 overflow-hidden mb-4">
            <div className="project-img">
              <img src={imgSix} alt="Project img" className="rounded w-100" />
            </div>
            <div className="overlay d-flex align-items-center justify-content-center  p-3">
              <div className="over-content ">
                <h2 className="project-name  text-center">Pricing Section</h2>
                <ul className="tech  list-unstyled mb-2 ">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <a
                  className="live-preview  text-decoration-none"
                  href="https://ehab-elshahat.github.io/pricing-page/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Preview: </span>
                  <i className="fa-solid fa-link "></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-lg-6 col-sm-12">
          <div className="project position-relative rounded-3 overflow-hidden mb-4">
            <div className="project-img">
              <img src={imgSeven} alt="Project img" className="rounded w-100" />
            </div>
            <div className="overlay d-flex align-items-center justify-content-center  p-3">
              <div className="over-content ">
                <h2 className="project-name  text-center">Luxestate</h2>
                <ul className="tech  list-unstyled mb-2 ">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <a
                  className="live-preview  text-decoration-none"
                  href="https://ehab-elshahat.github.io/Luxestate/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Preview: </span>
                  <i className="fa-solid fa-link "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-6 col-sm-12">
          <div className="project position-relative rounded-3 overflow-hidden mb-4">
            <div className="project-img">
              <img src={img8} alt="Project img" className="rounded w-100" />
            </div>
            <div className="overlay d-flex align-items-center justify-content-center  p-3">
              <div className="over-content ">
                <h2 className="project-name  text-center">Store Sidebar</h2>
                <ul className="tech  list-unstyled mb-2 ">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
                <a
                  className="live-preview  text-decoration-none"
                  href="https://ehab-elshahat.github.io/Store-Sidebar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Preview: </span>
                  <i className="fa-solid fa-link "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
