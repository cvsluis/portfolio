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
    <div data-aos="fade-up" className="p-8 md:px-36 md:py-16 flex flex-col">
      <h2 className="font-bold font-dm text-5xl py-8">About Me</h2>
      <div className="flex flex-col gap-3">
        <p>
          Hello and welcome! I'm Caitlin Vandersluis (van · der · sloos), and I'm excited that
          you're here!
        </p>
      </div>
    </div>
  );
}
