"use client";

import { useEffect } from "react";
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

  return (
    <main className="bg-light">
      <div className="container mx-auto">
        <Hello />
        <Nav />
        <div data-aos="fade-up">
          <AboutMe />
        </div>
        <div data-aos="fade-up">
          <Projects />
        </div>
      </div>
    </main>
  );
}
