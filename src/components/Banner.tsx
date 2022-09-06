import React, { useContext } from "react";
import { UtilitiesContext } from "../context/UtilitiesContext";

const Banner = () => {
  const { activeSlide } = useContext(UtilitiesContext);
  return (
    <div
      className="w-full h-96 p-8 flex items-center"
      style={{
        background: `linear-gradient(
          to top,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0.5),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(
          to right,
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0.5),
          rgba(255, 255, 255, 0)
        ), center/cover url(${activeSlide.banner})`,
      }}
    >
      <div className="flex flex-col gap-3 max-w-[700px]">
        <h2 className="uppercase text-3xl md:text-5xl tracking-widest">
          {activeSlide.title}
        </h2>
        <div className="flex gap-2 items-center text-sm md:text-base">
          <span className="text-green-400 font-bold">
            {activeSlide.match}% Match
          </span>
          <span>
            {activeSlide.seasons <= 1
              ? `${activeSlide.seasons} Season`
              : `${activeSlide.seasons} Seasons`}
          </span>
          {activeSlide.hd && <span className="badge badge-outline">HD</span>}
          <span className="badge badge-outline">5.1</span>
        </div>
        <p className="font-bold text-lg md:text-xl capitalize">
          {activeSlide.announce}
        </p>
        <p className="opacity-70 text-lg md:text-xl">{activeSlide.synopsis}</p>
      </div>
    </div>
  );
};

export default Banner;
