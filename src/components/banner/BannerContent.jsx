import React from "react";
import { cn } from "../../lib/utils";
import { Spotlight } from "../ui/Spotlight";
import ShinyText from "../ui/ShinyText";
import logo from "../../assets/myPhoto/me.jpg";
import facebook from '../../assets/socialIcons/facebook.png';
import linkedIN from '../../assets/socialIcons/linkedin.png';
import github from '../../assets/socialIcons/github.png';
const BannerContent = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-black/[0.96] rounded-2xl">
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none select-none z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-30 z-0"
        fill="white"
      />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center h-full gap-10 lg:gap-30 px-6 md:px-12">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="text-xl md:text-xl font-medium text-gray-300">Hi, I'm</p>

          <h1 className="text-4xl md:text-7xl font-bold text-transparent">
            <ShinyText
              text="Rafi Shariar"
              disabled={false}
              speed={2.5}
              className="text-4xl md:text-8xl font-bold"
            />
          </h1>

          <h2 className="text-lg md:text-xl mt-2">
            FULL STACK WEB DEVELOPER
          </h2>

          <div className="mt-3 -ml-2 flex ">
            <a href="https://www.facebook.com/rafi.shariar.630040/" target="_blank" className=" p-2 rounded-full hover:bg-gray-700"><img src={facebook} alt="" /></a>
            <a href="https://github.com/Rafi-Shariar" target="_blank" className=" p-2 rounded-full hover:bg-gray-700"><img src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/rafi-shariar-231449214/" target="_blank" className=" p-2 rounded-full hover:bg-gray-700"><img src={linkedIN} alt="" /></a>
    
          </div>
        </div>

        {/* Right Image */}
        <div className="w-40 h-40 md:w-70 md:h-70 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
          <img
            src={logo}
            alt="Rafi Shariar"
            className="w-full h-full object-cover object-center "
          />
        </div>
      </div>
    </section>
  );
};

export default BannerContent;
