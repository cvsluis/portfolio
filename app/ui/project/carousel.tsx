"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "@/app/lib/definitions";

export default function Carousel({ images }: { images: Images }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    swipeToSlide: true,
    swipe: true,
  };

  return (
    <Slider
      {...settings}
      className="w-[100%] md:w-[50%] flex-1 shadow-lg"
    >
      {images.map((image, index) => {
        if (image.type === "video") {
          return (
            <video width="100%" height="100%" controls key={"video" + index} title="Screen recording of project">
              <source src={image.url} type="video/mp4" />
            </video>
          );
        } else {
          return (
            <img
              src={image.url}
              key={"image" + index}
              className="w-full h-full object-contain"
              alt="Screenshot of project"
            ></img>
          );
        }
      })}
    </Slider>
  );
}
