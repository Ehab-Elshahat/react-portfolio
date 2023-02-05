import { NavLink } from "react-router-dom";

import "./Aside.css";

const Aside = () => {
  return (
    <aside>
      <div className="logo">
        <NavLink className="h2" to={"/"}>E</NavLink>
      </div>
      <div className="aside-links">
        <NavLink to="/" className="link">
          <i className="fa-solid fa-house-user"></i>
          <span>Home</span>
        </NavLink>

        <NavLink to="about" className="link">
          <i className="fa-regular fa-user"></i>
          <span>About</span>
        </NavLink>

        <NavLink to={"/skills"} className="link">
          <i className="fa-solid fa-file"></i>
          <span>Skills</span>
        </NavLink>

        <NavLink to={"/projects"} className="link">
          <i className="fa-solid fa-briefcase"></i>
          <span>Projects</span>
        </NavLink>

        <NavLink to={"/contact"} className="link">
          <i className="fa-solid fa-phone"></i>
          <span>Contact</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
