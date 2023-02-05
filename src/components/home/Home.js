import "./home.css"
import headerImg from "../../assets/img/header-img.png"
import {motion} from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="container-fluid">
        <nav>
          <div className="phone">
            <span>Phone: </span>
            <a href="tel:00201025198925">+201025198925</a>
          </div>
          <div className="email">
            <span>Email: </span>
            <a href="mailto:ehabelshohat@yahoo.com">ehabelshohat@yahoo.com</a>
          </div>
        </nav>
        <header>
          <div className="header-img 	d-none d-md-block">
            <img src={headerImg} alt="Header Img" />
          </div>
          <div className="header-desc mt-md-5 ">
            <h3>Hello, My name is</h3>
            <h1>Ehab Elshahat</h1>
            <h2>Front-end Developer</h2>
            <p>
              I program modern and interactive user interfaces that respond to
              all screens
            </p>
            <a
              className="download"
              href="../../assets/img/1-23 CV.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </header>
      </div>
    </motion.div>
  );
}

export default Home;
