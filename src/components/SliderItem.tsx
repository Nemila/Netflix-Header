import React from "react";
import { TbBell } from "react-icons/tb";

import styled from "styled-components";

const ImgWrapper = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }
`;

type Props = {
  img: string;
};

const SliderItem = ({ img }: Props) => {
  return (
    <div className="hover:p-1 hover:bg-white text-dark group transition-all flex flex-col justify-center items-center cursor-pointer">
      <ImgWrapper>
        <img src={img} alt="13 reasons why" />
      </ImgWrapper>
      <button className="hidden group-hover:flex justify-center items-center gap-1 p-1 font-bold">
        <TbBell className="text-xl" />
        Remind me
      </button>
    </div>
  );
};

export default SliderItem;
