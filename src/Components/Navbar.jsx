import React from "react";
import { Link, Links, NavLink } from "react-router";

const Navbar = () => {

    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/'}>Projects</NavLink>
    </>
  return (
    <div className="bg-primary">
      <div className="navbar  shadow-sm max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* Logo */}
              LOGO
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {/* //modile */}
             {
                links
             }
            </ul>
          </div>
          <Link to={'/'} className="text-2xl text-base-100">LOGO Rafi Shariar</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-10 text-white text-lg">
           {/* Desktop */}
           {
            links
           }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
