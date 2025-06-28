import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import R1 from "../../assets/Projects/PlantKeeper/P1.png";
import R2 from "../../assets/Projects/PlantKeeper/P2.png";
import R3 from "../../assets/Projects/PlantKeeper/P3.png";

const PlantKeeper = () => {
  return (
    <div className="p-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg border border-green-100 overflow-hidden my-10">
        {/* Carousel Banner */}
        <div>
          <div className="carousel w-full">
            <div
              id="item1"
              className="carousel-item w-full lg:h-[500px] border-b"
            >
              <img
                src={R1}
                alt="PlantKeeper Screenshot 1"
                className="w-full object-cover h-full"
              />
            </div>
            <div
              id="item2"
              className="carousel-item w-full lg:h-[500px] border-b"
            >
              <img
                src={R2}
                alt="PlantKeeper Screenshot 2"
                className="w-full object-cover h-full"
              />
            </div>
            <div
              id="item3"
              className="carousel-item w-full lg:h-[500px] border-b"
            >
              <img
                src={R3}
                alt="PlantKeeper Screenshot 3"
                className="w-full object-cover h-full"
              />
            </div>
          </div>
          <div className="flex w-full justify-center gap-3 py-3">
            <a href="#item1" className="btn btn-xs bg-primary text-white">
              1
            </a>
            <a href="#item2" className="btn btn-xs bg-primary text-white">
              2
            </a>
            <a href="#item3" className="btn btn-xs bg-primary text-white">
              3
            </a>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 md:p-10 flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">PlantKeeper</h1>
            <p className="text-gray-500 mt-1 text-lg">Plant Care Platform</p>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              <strong>PlantKeeper</strong> is a modern, user-friendly web
              application built to simplify the life of plant lovers. Whether
              you’re new to plant care or an experienced gardener, PlantKeeper
              helps you keep track of plant routines, discover new species, and
              maintain a well-organized digital garden. It emphasizes
              simplicity, functionality, and aesthetic design—ensuring a smooth
              experience for all users.
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              ✨ Key Features
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
              <li>
                🔍 Explore New Plants - Browse plant entries shared by other
                users and learn proper care methods.
              </li>
              <li>
                🪴 Track Your Plant Routine - Stay on top of watering schedules,
                sunlight needs, and other tasks.
              </li>
              <li>
                📝 Full CRUD Functionality - Add, update, or delete plants from
                your personal collection.
              </li>
              <li>
                🌙 Dark Mode Support - A sleek and accessible dark mode for
                enhanced comfort at night.
              </li>
              <li>
                🔐 User Authentication - Firebase-powered sign-up and login to
                keep your plant data safe.
              </li>
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              🔧 Technologies Used
            </h2>
            <div className="mt-2 space-y-2 text-sm text-gray-600">
              <div>
                <span className="font-medium">🚀 Frontend:</span> React,
                Tailwind CSS, DaisyUI, React Router, React Icons, React Slick,
                React Lottie, React Tooltip
              </div>
              <div>
                <span className="font-medium">🔐 Backend & Auth:</span> Firebase
                Authentication, Firestore Database, Firebase Hosting
              </div>
              <div>
                <span className="font-medium">🧰 Utilities:</span> SweetAlert2,
                Cally (Calendar/Scheduler), Slick Carousel, Tailwind + Vite
                integration
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              🚧 Challenges Faced
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
              <li>Building a smooth, responsive UI with dynamic plant data</li>
              <li>Managing state efficiently for CRUD operations</li>
              <li>Implementing dark mode with seamless theme toggling</li>
              <li>Ensuring secure user authentication and data privacy</li>
            </ul>
          </div>

          {/* Future Plans */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              🚀 Future Plans & Improvements
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
              <li>Introduce plant care reminders and notifications</li>
              <li>Implement AI-based plant disease detection</li>
              <li>Enhance social features to share plant collections</li>
            </ul>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://ph-a10-60ab6.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-green-700 border border-green-600 rounded-full px-4 py-2 hover:bg-green-600 hover:text-white transition"
            >
              <IoIosLink /> Live Preview
            </a>
            <a
              href="https://github.com/Rafi-Shariar/PlantKeeper-Client-Side"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
            >
              <FaGithub /> Client Code
            </a>
            <a
              href="https://github.com/Rafi-Shariar/PlantKeeper-Server-Side"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
            >
              <FaGithub /> Server Code
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <a href="/" className="btn btn-primary"><IoIosArrowRoundBack className="text-lg"/>Back to Home</a>
      </div>
    </div>
  );
};

export default PlantKeeper;
