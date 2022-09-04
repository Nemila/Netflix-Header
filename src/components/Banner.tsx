import React from "react";

import styled from "styled-components";

const StyledBanner = styled.section`
  background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0)
    ),
    url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FjXU4YYhcY61hbeQWQxxbpTSGCFh.jpg&f=1&nofb=1");

  background-size: cover;
  background-position: center;
`;

type Props = {};

const Banner = (props: Props) => {
  return (
    <StyledBanner className="w-full h-[425px] p-8 pb-0 flex flex-col justify-center ">
      <div className="flex flex-col gap-3 max-w-[600px]">
        <h2 className="uppercase text-5xl tracking-widest">13 Reasons why</h2>
        <div className="flex gap-2 items-center opacity-70">
          <span className="text-green-400 font-bold">97% Match</span>
          <span>2018</span>
          <span className="bg-semiLight badge">TV-MA</span>
          <span>2 Seasons</span>
          <span className="badge-inverted">HD</span>
          <span className="badge-inverted">5.1</span>
        </div>
        <p className="font-bold text-xl">Season 3 Coming Friday</p>
        <p className="opacity-70 text-2xl">
          Months after the Spring Fling, Liberty High is hit with a new shock
          when Bryce Walker is murdered the night of homecoming ... and everyone
          is suspect.
        </p>
      </div>
    </StyledBanner>
  );
};

export default Banner;
