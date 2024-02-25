"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "./Project";
import { projects } from "../lib/data";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="flex flex-col items-center gap-4">
      <h2 className="font-bold font-outfit text-5xl pb-8">Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-auto gap-3 md:gap-4 mx-auto">
        {projects.map((project, index) => {
          return <Project key={"project" + index} {...project} />;
        })}
      </div>
    </div>
  );
}
