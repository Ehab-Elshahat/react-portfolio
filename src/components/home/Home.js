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
      <div className="container">
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
          <div className="row align-items-center">
            <div className="col-lg-6 col-xs-12">
              <div className="header-img 	d-none d-lg-block">
                <img src={headerImg} alt="Header Img" />
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
              <div className="header-desc mt-md-5 ">
                <h3>Hello, My name is</h3>
                <h1>Ehab Elshahat</h1>
                <h2>Front-end Developer</h2>
                <p>
                  Over the past several years, I have dedicated myself to
                  learning various programming languages, including HTML, CSS,
                  and JavaScript. I have also gained experience with various
                  front-end frameworks such as React and Vue My passion for
                  front-end development is driven by my love for building
                  beautiful, user-friendly interfaces. I have always been
                  fascinated by the way websites and web applications work, and
                  I am constantly striving to improve my skills and knowledge in
                  this field. Throughout my self-learning journey, I have
                  developed a strong work ethic, attention to detail, and the
                  ability to work independently to achieve my goals.
                </p>
                <a
                  className="download"
                  href="../../assets/img/1-23 CV.pdf"
                  download
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </motion.div>
  );
}

export default Home;
