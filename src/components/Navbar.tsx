import React from "react";

import styled from "styled-components";

//icons
import {
  BiHome,
  BiSearch,
  BiCalendar,
  BiTv,
  BiMovie,
  BiPlus,
} from "react-icons/bi";

const NavLink = styled.a<{ active?: boolean }>`
  &::before {
    opacity: ${({ active }) => (active ? "1" : "0")};
  }

  &:hover::before {
    opacity: 1;
  }
`;

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full bg-dark md:w-14 md:h-screen fixed top-0 left-0">
      <div className="w-full h-full flex md:flex-col justify-center items-center">
        <NavLink href="/" className="nav-item md:navbar-dash">
          <BiSearch />
        </NavLink>
        <NavLink href="/" className="nav-item md:navbar-dash" active={true}>
          <BiHome />
        </NavLink>
        <NavLink href="/" className="nav-item md:navbar-dash">
          <BiCalendar />
        </NavLink>
        <NavLink href="/" className="nav-item md:navbar-dash">
          <BiTv />
        </NavLink>
        <NavLink href="/" className="nav-item md:navbar-dash">
          <BiMovie />
        </NavLink>
        <NavLink href="/" className="nav-item md:navbar-dash">
          <BiPlus />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
