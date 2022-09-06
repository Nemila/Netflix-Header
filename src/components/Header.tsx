import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="pl-[50px]">
      <header>
        <Banner />
        <Slider />
      </header>
    </div>
  );
};

export default Header;
