import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="pt-14 pb-4 md:pl-14 md:pt-0">
      <header>
        <Banner />
        <Carousel />
      </header>
    </div>
  );
};

export default Header;
