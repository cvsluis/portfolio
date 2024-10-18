"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-8 items-center rounded-2xl"
    >
      <h2 className="font-bold font-outfit text-5xl pt-0">About Me</h2>
      <div className="flex flex-col gap-3 items-center">
        <p className="text-center">
          Hello and welcome! I&apos;m Caitlin Vandersluis (van · der · sloos),
          and I&apos;m excited that you&apos;re here!
        </p>
        <p className="text-center">
          I&apos;m a web developer who has transitioned from healthcare into the
          tech industry. I&apos;ve recently completed a successful internship at
          an innovative tech company in Victoria, BC. I&apos;m so excited to be
          using my skills to solve puzzles and make beautiful things! I am
          fascinated by technology and would love to be a part of showing the
          world how it can be used for good.
        </p>
        <p className="text-center">
          Check out some of my work and feel free to connect with me on
          LinkedIn!
        </p>
      </div>
    </div>
  );
}
