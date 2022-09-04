import React from "react";
import Banner from "./Banner";
import Slider from "./Slider";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="pl-[50px]">
      <header>
        <Banner img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.alphacoders.com%2F829%2F829094.jpg&f=1&nofb=1" />
        <Slider title="Coming this year" />
      </header>
    </div>
  );
};

export default Header;
