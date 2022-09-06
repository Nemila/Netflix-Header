import React, { useContext } from "react";
import SliderItem from "./SliderItem";

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

const Slider = () => {
  const { comingThisYear } = useContext(UtilitiesContext);
  return (
    <div className="w-full px-4 flex flex-col gap-3 min-h-64">
      <h3 className="font-bold text-xl capitalize">Coming this year</h3>
      <div className="grid md:grid-cols-5 gap-4 items-start">
        {comingThisYear.map((movie: Movie) => (
          <SliderItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
