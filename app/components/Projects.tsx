"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "./Project";
import { projects } from "../projects";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="p-8 md:px-36 md:py-16 min-h-screen flex flex-col"
    >
      <h2 className="font-bold font-dm text-5xl pb-8">Projects</h2>
      <h3>Some of my favourite and most recent work!</h3>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => {
          return <Project key={"project" + index} {...project} />;
        })}
      </div>
    </div>
  );
}
