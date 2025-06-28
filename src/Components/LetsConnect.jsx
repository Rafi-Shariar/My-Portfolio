import React from "react";
import Contact from "./Contact";
import facebook from "../assets/Socials/facebook.png";
import linkedin from "../assets/Socials/linkedin.png";
import github from "../assets/Socials/github.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const LetsConnect = () => {
  return (
    <div className="px-4 py-12 max-w-6xl mx-auto bg-primary lg:p-10 rounded-3xl mb-14">
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-center">
        {/* Social Contact - left on desktop, bottom on mobile */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-light text-white">
            Let’s Connect to build <br className="hidden md:block" /> something
            beautiful today.
          </h1>

          <div className="">
            <h1 className="text-xl font-semibold text-gray-300">
              Get In Touch Instant
            </h1>
            <div className="flex flex-col gap-3 mt-5 text-white">
              <a
                href="https://wa.me/8801341765565"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              ><IoLogoWhatsapp className="inline mr-2 text-green-600"/>WhatsApp</a>

              <a href="tel:+8801341765565"  className="hover:underline"><IoCallSharp className="inline mr-2 text-blue-600"/>+88 01341-765565</a>
              <a href="mailto:rafi.shariar619@gmail.com"  className="hover:underline"><MdEmail className="inline mr-2 text-red-600"/>rafi.shariar619@gmail.com</a>
              <p><IoLocationSharp className="inline mr-2 text-purple-600"/>Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-xl font-medium ">Also Find Me On</h2>

          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100009751488577"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-10 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rafi-shariar-231449214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-10 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://github.com/Rafi-Shariar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-10 hover:scale-110 transition-transform"
              />
            </a>
          </div>
          </div>
        </div>

        {/* Contact Form - right on desktop, top on mobile */}
        <div className="md:w-1/2 w-full">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
