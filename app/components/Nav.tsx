"use client";
import { useEffect, useState } from "react";
import Asterisk from "../ui/svg/Asterisk";
import Github from "../ui/svg/Github";
import LinkedIn from "../ui/svg/LinkedIn";
import Link from "next/link";

const nearestIndex = (
  currentPosition: any,
  sectionPositionArray: {
    id: string;
    title: string;
    path: string;
    ref: any;
  }[],
  startIndex: number,
  endIndex: number
): any => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].ref.current.offsetTop - currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].ref.current.offsetTop - currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].ref.current.offsetTop - currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].ref.current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

export default function Nav({
  navlinks,
}: {
  navlinks: {
    id: string;
    title: string;
    path: string;
    ref: any;
  }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      var index = nearestIndex(
        window.scrollY,
        navlinks,
        0,
        navlinks.length - 1
      );
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navmap = navlinks.map((link, index) => {
    return (
      <li key={index} className="relative">
        {activeIndex === index && (
          <div className={`absolute left-[-18px] top-[2.5px]`}>
            <Asterisk />
          </div>
        )}
        <Link
          href={link.path}
          className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-pinkred after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <nav className="sticky top-16 text-sm hidden md:flex flex-row items-end justify-between pl-10 pr-8 lg:pl-6 lg:pr-4 z-50">
      <div>
        <ul className="flex flex-col gap-[2px]">{navmap}</ul>
      </div>
      <div className="flex flex-col items-end gap-2">
        <Github link="https://github.com/cvsluis" />
        <LinkedIn />
      </div>
    </nav>
  );
}
