import React from "react";
import picture from "../assets/Porfolio.png";
import { FaFacebook } from "react-icons/fa6";
import FB from "../assets/Socials/facebook.png";
import GT from "../assets/Socials/github.png";
import LI from "../assets/Socials/linkedin.png";
const Banner = () => {
  return (
    <div className="md:flex gap-10 items-center justify-between lg:mt-10 p-5 lg:p-10">
      <div className="md:w-1/2">
        <div>
          <h1 className="text-xl lg:text-3xl">Hi, I'm</h1>
          <h1 className="text-4xl lg:text-7xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Rafi Shariar
          </h1>
          <p className="text-xl text-slate-500">Web Developer</p>
        </div>

        <p className="mt-2 text-xs lg:text-[14px]">
          Crafting modern, user-centric web applications with a strong
          foundation in problem-solving and web technologies.
        </p>

        {/* <button className="btn btn-primary mt-4 hover:bg-base-200 hover:text-primary">Download Resume</button> */}

        <div className="flex overflow-hidden rounded-full max-w-[300px] border text-secondary mt-5">
          {/* Left side with background */}
          <div className="bg-primary text-white px-4 py-2 flex items-center justify-center font-semibold text-lg">
            Let’s Connect
          </div>

          {/* Right side with icons */}
          <div className="flex items-center gap-3 px-4 py-2 bg-transparent">
            <a href="https://www.facebook.com/rafi.shariar.630040/" target="_blank">
              <img src={FB} alt="Facebook" className="w-7" />
            </a>
            <a href="https://github.com/Rafi-Shariar" target="_blank">
              <img src={GT} alt="GitHub" className="w-7" />
            </a>
            <a href="https://www.linkedin.com/in/rafi-shariar-231449214/" target="_blank">
              <img src={LI} alt="LinkedIn" className="w-7" />
            </a>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center items-center ">
        <img
          src={picture}
          alt="Portfolio preview"
          className="w-[70%] mt-10 md:mt-0 rounded-2xl bg-gradient-to-t from-primary/10 to-primary/40 p-2 shadow-md"
        />
      </div>
    </div>
  );
};

export default Banner;
