import { motion } from "framer-motion";
import "./contact.css";
export default function Contact() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="container">
        <div className="contact">
          <div className="row ">
            <div className="col-lg-5">
              <div className="contact-left">
                <h2 className="mb-4">Get in touch</h2>
                <p className="lead">
                  Always available for freelancing, Feel free to contact me.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <span>
                      <i className="fa-solid fa-map-location"></i>
                    </span>
                    Kafr El-Sheikh Egypt
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <a href="mailto:ehabelshohat@yahoo.com">
                      ehabelshohat@yahoo.com
                    </a>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-mobile-screen"></i>
                    </span>
                    <a href="tel:00201025198925">+201025198925</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-right">
                <h2 className="mb-4">Say Something</h2>
                <form className="">
                  <div className="d-flex mb-4">
                    <input
                      className="form-control"
                      type="text"
                      name="full-name"
                      id="full-name"
                      placeholder="Full Name"
                    />
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <input
                    className="form-control mb-4"
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                  <textarea
                    className="form-control mb-4"
                    name="message"
                    id="message"
                    placeholder="Type Content"
                  ></textarea>
                  <input type="submit" value="Send Message" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="social">
            <ul className="list-unstyled d-flex">
              <li>
                <a
                  href="https://www.facebook.com/ehap.hoba.1"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/feed/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Ehab-Elshahat?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <p className="copyright">
            <i className="fa fa-copyright" aria-hidden="true"></i> 2023
            copyright
            <span> Ehab Elshahat </span> All right reserved
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
