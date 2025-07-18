
import React from "react";
import { FaCode, FaChartLine, FaTrophy } from "react-icons/fa";
import solvingIllustration from '../../assets/Skills/Problem solving-rafiki.png';
import ShinyText from "../ui/ShinyText";
const ProblemSolving = () => {
  return (
    <div className="max-w-7xl mx-auto  rounded-3xl pt-16 px-8 mt-10 shadow-xl  overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="lg:w-1/2 space-y-6">
           <div className='flex mb-6'>
                <ShinyText
              text="Solved 500+"
              disabled={false}
              speed={2.5}
              className="text-4xl md:text-5xl font-bold "
            />
            </div>
          <p className="text-2xl text-gray-300">Problems On various coding platforms</p>
          <p className="text-lg text-gray-400">
            Demonstrating deep problem-solving skills and a solid foundation in core programming concepts like data structures and algorithms.
          </p>
          <a
            href="https://codeforces.com/profile/Rafi_Shariar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-white bg-sky-700 hover:bg-sky-600 rounded-lg font-medium shadow"
          >
            View Codeforces Profile
          </a>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={solvingIllustration}
            alt="Problem Solving Illustration"
            className="w-full max-w-md animate-fade-in"
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemSolving;
