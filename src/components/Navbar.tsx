import React from "react";

//icons
import {
  BiHome,
  BiSearch,
  BiCalendar,
  BiTv,
  BiMovie,
  BiPlus,
} from "react-icons/bi";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full bg-dark md:w-14 md:h-screen fixed top-0 left-0">
      <div className="w-full h-full flex md:flex-col justify-center items-center">
        <a href="/" className="nav-item md:navbar-dash">
          <BiSearch />
        </a>
        <a href="/" className="nav-item md:navbar-dash">
          <BiHome />
        </a>
        <a href="/" className="nav-item md:navbar-dash">
          <BiCalendar />
        </a>
        <a href="/" className="nav-item md:navbar-dash">
          <BiTv />
        </a>
        <a href="/" className="nav-item md:navbar-dash">
          <BiMovie />
        </a>
        <a href="/" className="nav-item md:navbar-dash">
          <BiPlus />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
