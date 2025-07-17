import React from "react";
import html from "../../assets/Skills/html.png";
import css from "../../assets/Skills/css-3.png";
import tailwind from "../../assets/Skills/tailwind.png";
import js from "../../assets/Skills/java-script.png";
import react from "../../assets/Skills/atom.png";

const ForntEndSkills = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 justify-center items-center">
      <div className=" w-28 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-2  h-24 flex flex-col items-center justify-center">
        <img src={html} className="w-8 h-8 object-contain mb-2" />
        <h1 className="text-[13px] text-center font-medium">
          HTML
        </h1>
      </div>

      <div className="bg-slate-300 w-28 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-2  h-24 flex flex-col items-center justify-center">
        <img src={css} className="w-8 h-8 object-contain mb-2" />
        <h1 className="text-[13px] text-center font-medium">
          CSS
        </h1>
      </div>

      <div className=" w-28 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-2  h-24 flex flex-col items-center justify-center">
        <img src={tailwind} className="w-8 h-8 object-contain mb-2" />
        <h1 className="text-[13px] text-center font-medium">
          tailwind CSS
        </h1>
      </div>


      <div className=" w-28 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-2  h-24 flex flex-col items-center justify-center">
        <img src={js} className="w-8 h-8 object-contain mb-2" />
        <h1 className="text-[13px] text-center font-medium">
          JavaScript
        </h1>
      </div>

      <div className=" w-28 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-2  h-24 flex flex-col items-center justify-center">
        <img src={react} className="w-8 h-8 object-contain mb-2" />
        <h1 className="text-[13px] text-center font-medium">
          React
        </h1>
      </div>
    </div>
  );
};

export default ForntEndSkills;
