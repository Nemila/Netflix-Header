import React, { useContext } from "react";
import SliderItem from "./SliderItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { UtilitiesContext } from "../context/UtilitiesContext";

type Movie = {
  id: number;
  title: string;
  match: number;
  release: number;
  seasons: number;
  hd: boolean;
  announce: string;
  synopsis: string;
  img: string;
  banner: string;
};

const Carousel = () => {
  const { comingThisYear } = useContext(UtilitiesContext);

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 flex flex-col gap-3 min-h-64">
      <h3 className="font-bold text-xl capitalize">Coming this year</h3>
      <Slider {...settings}>
        {comingThisYear.map((movie: Movie) => (
          <SliderItem key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
