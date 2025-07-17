import React from "react";

import R1 from "../../assets/Projects/PlantKeeper/P1.png";
import { Link } from "react-router";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
const PlantKeeperCard = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto my-12 bg-white dark:bg-[#111] rounded-3xl shadow-xl border border-blue-900 overflow-hidden flex flex-col md:flex-row transition-all duration-300">
        {/* Image Section */}
        <div className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src={R1}
            alt="RateWise Screenshot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="md:w-1/2 w-full p-6 md:p-10 space-y-4 flex flex-col justify-center">
          <h1 className="text-4xl font-semibold text-white">PlantKeeper</h1>
          <p className="text-sm uppercase tracking-wider text-gray-300 font-medium">
            Plant Care Platfrom
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            PlantKeeper is a modern, user-friendly web application built to simplify the life of plant lovers. PlantKeeper helps you keep track of plant routines, discover new species, and maintain a well-organized digital garden..
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mt-6">
            {["React", "Firebase", "Express.js", "MongoDB"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 text-sm rounded-full font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="https://ph-a10-60ab6.web.app/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-blue-900 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition"
            >
              <IoIosLink /> Preview
            </Link>
            <Link
              to="https://github.com/Rafi-Shariar/PlantKeeper-Client-Side"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-xl transition"
            >
              <FaGithub /> Client
            </Link>
            <Link
              to="https://github.com/Rafi-Shariar/PlantKeeper-Server-Side"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-xl transition"
            >
              <FaGithub /> Server
            </Link>
            <Link
              to="/PlateKeeper"
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-black text-sm font-medium rounded-xl transition"
            >
              <FaExternalLinkAlt /> Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantKeeperCard;
