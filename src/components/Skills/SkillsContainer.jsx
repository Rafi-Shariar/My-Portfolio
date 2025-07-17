import React from "react";
import ForntEndSkills from "./ForntEndSkills";
import point from "../../assets/Skills/git-commit-vertical.png";
import Aurora from "../ui/Aurora";

const SkillsContainer = () => {
  return (
    <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-3 gap-6">
   
        <div className="">
          <h1 className="text-xl font-semibold text-gray-400">FORNT END</h1>
          <ul className="flex flex-col gap-2 mt-3"></ul>
          <ul className="flex flex-col gap-2 mt-3">
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              HTML
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              CSS
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              Tailwind CSS
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              React
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              JavaScript
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-gray-400">BACK END</h1>
          <ul className="flex flex-col gap-2 mt-3">
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              Node.js
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              Express.js
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              Firebase
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              JWT
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              REST API
            </li>
            
          </ul>
        </div>

         <div>
          <h1 className="text-xl font-semibold text-gray-400">DATABASES</h1>
          <ul className="flex flex-col gap-2 mt-3">
           
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              MongoDB
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              MySQL
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-gray-400">TOOLS</h1>
          <ul className="flex flex-col gap-2 mt-3">
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              Git
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              Axios
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              Vercel
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-semibold text-gray-400">OTHERS</h1>
          <ul className="flex flex-col gap-2 mt-3 ">
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              C++
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              Data Structures
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              Algorithms
            </li>
            <li className="flex items-center text-lg">
              <img src={point} alt="" className="h-8" />
              OOP
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
