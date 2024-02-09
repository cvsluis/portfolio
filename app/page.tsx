"use client";

import { useRef } from "react";
import Hello from "./components/Hello";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function Home() {
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
    <main>
      <div className="container mx-auto">
        <section id="hello" ref={helloRef}>
          <Hello />
        </section>
        <Nav navlinks={navlinks} />
        <section id="about" ref={aboutRef} className="px-6 py-8 md:px-36 md:py-16">
          <AboutMe />
        </section>
        <section id="projects" ref={projectsRef} className="px-6 py-8 md:px-36 md:py-16">
          <Projects />
        </section>
      </div>
    </main>
  );
}
