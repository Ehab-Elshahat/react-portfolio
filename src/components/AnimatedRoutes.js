import React from 'react'

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact"
import {AnimatePresence} from "framer-motion";
export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
