import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="pt-14 pb-4 md:pl-14 md:pt-0">
      <header>
        <Banner />
        <Slider />
      </header>
    </div>
  );
};

export default Header;
