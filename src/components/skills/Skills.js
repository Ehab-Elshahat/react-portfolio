import { motion } from "framer-motion";
import "./skills.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Skills() {
  return (
    <motion.div
      className="container pt-5"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition:{duration: .3} }}
    >
      <h2 className="skills-title text-light mb-4 mt-5 ml-5 bill display-4">
        My Skills
      </h2>
      <div className="skills">
        <div className="row">
          <div className="col-sm-4 col-lg-2 mb-3 ">
            <CircularProgressbar
              value={90}
              text={`90%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",

                // Text size
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 2,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `orange`,
                textColor: "#fff",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <h3 className="text-center mt-3 text-light h5">HTML5</h3>
          </div>

          <div className="col-sm-4 col-lg-2 mb-3 ">
            <CircularProgressbar
              value={85}
              text={`85%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "16px",
                pathTransitionDuration: 2,
                pathColor: `orange`,
                textColor: "#fff",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <h3 className="text-center mt-3 text-light h5 ">CSS3</h3>
          </div>
          <div className="col-sm-4 col-lg-2 mb-3 ">
            <CircularProgressbar
              value={80}
              text={`80%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "16px",
                pathTransitionDuration: 2,
                pathColor: `orange`,
                textColor: "#fff",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <h3 className="text-center mt-3 text-light h5 ">JavaScript</h3>
          </div>
          <div className="col-sm-4 col-lg-2 mb-3 ">
            <CircularProgressbar
              value={80}
              text={`80%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "16px",
                pathTransitionDuration: 2,
                pathColor: `orange`,
                textColor: "#fff",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <h3 className="text-center mt-3 text-light h5 ">Bootstrap</h3>
          </div>
          <div className="col-sm-4 col-lg-2 mb-3 ">
            <CircularProgressbar
              value={70}
              text={`70%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "16px",
                pathTransitionDuration: 2,
                pathColor: `orange`,
                textColor: "#fff",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <h3 className="text-center mt-3 text-light h5 ">jquery</h3>
          </div>
          <div className="col-sm-4 col-lg-2 mb-3">
            <CircularProgressbar
              value={50}
              text={`50%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "16px",
                pathTransitionDuration: 2,
                pathColor: `orange`,
                textColor: "#fff",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <h3 className="text-center mt-3 text-light h5 ">
              vue.js(Entry Level)
            </h3>
          </div>
          <div className="col-sm-4 col-lg-2 mb-3">
            <CircularProgressbar
              value={50}
              text={`50%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "round",
                textSize: "16px",
                pathTransitionDuration: 2,
                pathColor: `orange`,
                textColor: "#fff",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
            <h3 className="text-center mt-3 text-light h5 ">
              React.js(Entry Level)
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
