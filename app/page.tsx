import React from "react";
import About from "./componenets/About";
import Basic from "./componenets/Basic";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Projects from "./componenets/Projects";
import Skills from "./componenets/Skills";

export default function page() {
  return (
    <>
      <Header />
      <Basic />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
