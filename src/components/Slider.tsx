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

type Props = {};

const Slider = (props: Props) => {
  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="hover:p-1 hover:bg-white text-dark group transition-all flex flex-col justify-center items-center cursor-pointer">
          <ImgWrapper>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.netflix-nederland.nl%2Fwp-content%2Fuploads%2F2018%2F05%2Fs2-13rw-810x456.jpg&f=1&nofb=1"
              alt="13 reasons why"
            />
          </ImgWrapper>
          <button className="hidden group-hover:flex justify-center items-center gap-1 p-1 font-bold">
            <TbBell className="text-xl" />
            Remind me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
