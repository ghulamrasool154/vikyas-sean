import NavLink from "@/components/nav-link/nav-link";
import React from "react";
import { Link } from "react-scroll";

const NavItem = ({ nav, to, classes, ...rest }) => {
  return (
    <li>
      {/* <NavLink href={nav.link} className={classes}>
        {nav.name}
      </NavLink> */}
      <Link
        activeClass="!opacity-100"
        to={to}
        className={` opacity-60 hover:opacity-100 cursor-pointer ${classes}`}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        {...rest}
      >
        {nav.name}
      </Link>
    </li>
  );
};

export default NavItem;
