import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./sass/main.scss";
import Header from './components/Header';
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectList from './components/ProjectList';
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import SocialList from "./components/SocialList";
import Viewport from "./helpers/Viewport";

export default function App() {
  const { width } = Viewport();
  const breakpoint = 800;

  return (
    <div className="App">
      {width >= breakpoint ? <SocialList addClass="desktop" /> : ""}
      <Header />
      <Navbar />
      <About />
      <Skills />
      <ProjectList />
      <Contact />
      {width >= breakpoint ? "" : <SocialList addClass="mobile" />}
    </div >
  );
}