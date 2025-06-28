import React from "react";
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <div>
      <footer className="footer flex justify-center sm:footer-horizontal bg-primary text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <img src={logo} alt="" className="w-7"/>
          <p>Copyright © {new Date().getFullYear()} - All right reserved By Rafi Shariar</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
