import React from "react";
import { Link, Links, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { IoMdDownload } from "react-icons/io";
const Navbar = () => {
  const links = (
    <>
      <NavLink to={'/'}>Home</NavLink>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </>
  );
  return (
    <div className="bg-primary sticky top-0 z-20">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* Logo */}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* //modile */}
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            <img src={logo} alt="" className="w-10" />
          </Link>
          <h1 className="hidden md:inline text-white font-semibold text-2xl ml-3">Rafi Shariar</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-10 text-white text-lg">
            {/* Desktop */}
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-soft">
            <IoMdDownload className="text-xl" />
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
