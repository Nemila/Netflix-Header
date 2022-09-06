import React, { useContext, useState } from "react";
import { TbBell, TbCheck } from "react-icons/tb";
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

type Props = {
  movie: Movie;
};

const SliderItem = ({ movie }: Props) => {
  const { changeActiveSlide } = useContext(UtilitiesContext);
  const [reminder, setReminder] = useState(false);

  const handleActiveSlide = () => {
    changeActiveSlide(movie.id);
  };

  const handleReminder = (e: any) => {
    e.stopPropagation();
    setReminder((prev) => !prev);
  };

  return (
    <div
      className="hover:p-1 hover:pb-0 hover:bg-white text-dark group transition-all flex flex-col justify-center items-center cursor-pointer"
      onClick={handleActiveSlide}
    >
      <div className="overflow-hidden">
        <img
          src={movie.img}
          alt="13 reasons why"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <button
        className="hidden group-hover:flex justify-center items-center gap-1 py-2 font-bold font-[Poppins]"
        onClick={handleReminder}
      >
        {reminder ? (
          <>
            <TbCheck className="text-xl" /> Reminder set
          </>
        ) : (
          <>
            <TbBell className="text-xl" /> Remind me
          </>
        )}
      </button>
      {reminder && (
        <p className="py-2 flex justify-center items-center gap-1 group-hover:hidden font-bold font-[Poppins] text-white">
          <TbCheck className="text-xl" /> <span>Reminder set</span>
        </p>
      )}
    </div>
  );
};

export default SliderItem;
