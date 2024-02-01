"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hello from "./components/Hello";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  const helloRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();

  const navlinks = [
    {
      id: "hello",
      title: "HELLO",
      path: "/",
      ref: helloRef,
    },
    {
      id: "about",
      title: "ABOUT",
      path: "#about",
      ref: aboutRef,
    },
    {
      id: "projects",
      title: "PROJECTS",
      path: "#projects",
      ref: projectsRef,
    },
  ];

  return (
    <main className="bg-light">
      <div className="container mx-auto">
        <section id="hello" ref={helloRef}>
          <Hello />
        </section>
        <Nav navlinks={navlinks} />
        <section id="about" ref={aboutRef}>
          <AboutMe />
        </section>
        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>
      </div>
    </main>
  );
}
