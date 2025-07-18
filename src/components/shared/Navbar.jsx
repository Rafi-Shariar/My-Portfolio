import React from "react";
import logo from "./../../assets/logo/logo.png";
import { Button } from "../ui/Button";
import { NavLink } from "react-router";
const Navbar = () => {
  const links = (
    <>
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </>
  );
  return (
    <div className="sticky z-1000 top-0">
      <div className="navbar bg-black max-w-7xl mx-auto pt-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex items-center">
            <img src={logo} alt="" className="w-12 bg-white rounded-full" />
            <a className="text-3xl hidden md:inline ml-2 font-semibold">
              Rafi <span className="font-light">Shariar</span>
            </a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-10 text-base">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://drive.google.com/file/d/1owwO2wjGFh09PZDYBGu0se52eDlVt9cJ/view" target="_blank">
            <Button
            borderRadius="1.75rem"
            className="text-slate-100 text-base font-semibold border-slate-800 hover:cursor-pointer"
          >
            Get Resume
          </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
