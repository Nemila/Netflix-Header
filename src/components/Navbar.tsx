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
  position: relative;
  z-index: 20;

  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem /* 28px */;

  &::before {
    content: "";

    position: absolute;
    left: 0;
    top: 0;

    height: 50px;
    width: calc(80px * 0.05);

    background-color: red;
    border-radius: 4em;
    opacity: ${({ active }) => (active ? "1" : "0")};
  }

  &:hover::before {
    opacity: 1;
  }
`;

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-dark w-[50px] h-screen fixed top-0 left-0">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <NavLink href="/" data-title="search">
          <BiSearch />
        </NavLink>
        <NavLink href="/" active={true} data-title="home">
          <BiHome />
        </NavLink>
        <NavLink href="/" data-title="calendar">
          <BiCalendar />
        </NavLink>
        <NavLink href="/" data-title="shows">
          <BiTv />
        </NavLink>
        <NavLink href="/" data-title="movies">
          <BiMovie />
        </NavLink>
        <NavLink href="/" data-title="add more">
          <BiPlus />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
