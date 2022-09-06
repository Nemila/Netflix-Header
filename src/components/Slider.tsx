import React from "react";
import SliderItem from "./SliderItem";

import { comingThisYear } from "../data/comingThisYear";

const Slider = () => {
  return (
    <div className="w-full px-4 flex flex-col gap-3 min-h-64">
      <h3 className="font-bold text-xl capitalize">Coming this year</h3>
      <div className="grid md:grid-cols-5 gap-4 items-start">
        {comingThisYear.map((item) => (
          <SliderItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
