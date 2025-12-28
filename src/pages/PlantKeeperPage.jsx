import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { NavLink } from "react-router";
import Footer from '../components/homepage/Footer';
import ProjectNavbar from "../components/shared/ProjectNavbar";
import R1 from '../assets/Projects/PlantKeeper/P1.png';
import R2 from '../assets/Projects/PlantKeeper/P2.png';
import R3 from '../assets/Projects/PlantKeeper/P3.png';
import R4 from '../assets/Projects/PlantKeeper/P4.png';
import R5 from '../assets/Projects/PlantKeeper/P5.png';
import R6 from '../assets/Projects/PlantKeeper/P6.png';
import { SparklesPreview } from "../components/Skills/SparklesPreview";
import ScrollToTop from "../components/shared/ScrollToTop";

const PlantKeeperPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <ScrollToTop/>
      <ProjectNavbar />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-16">
        {/* Left Column: Content */}
        <div className="md:w-3/5 space-y-8">
          <h1 className="text-5xl font-semibold">PlantKeeper</h1>
          <p className="text-lg text-slate-300">Plant Care Platform</p>

          <p>
            <strong>PlantKeeper</strong> is a modern, user-friendly web
              application built to simplify the life of plant lovers. Whether
              you’re new to plant care or an experienced gardener, PlantKeeper
              helps you keep track of plant routines, discover new species, and
              maintain a well-organized digital garden.
          </p>
          <p>
           It emphasizes
              simplicity, functionality, and aesthetic design—ensuring a smooth
              experience for all users.
          </p>

          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-400 mt-10">Technologies Used</h2>
            <p className="text-lg mt-3">
              <span className="font-semibold text-sky-400">Frontend:</span> React,
                Tailwind CSS, DaisyUI, React Router, React Icons, React Slick,
                React Lottie, React Tooltip
            </p>
            <p className="text-lg mt-3">
              <span className="font-semibold text-sky-400">Backend & Auth:</span> Firebase
                Authentication, Firestore Database, Firebase Hosting
            </p>
            <p className="text-lg mt-3">
              <span className="font-semibold text-sky-400">Utilities:</span> SweetAlert2,
                 Slick Carousel, Tailwind + Vite
                integration
            </p>
          </div>

          {/* Features */}
          <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Explore New Plants - Browse plant entries shared by other
                users and learn proper care methods.</li>
              <li>Track Your Plant Routine - Stay on top of watering schedules,
                sunlight needs, and other tasks.</li>
              <li>Full CRUD Functionality - Add, update, or delete plants from
                your personal collection.</li>
              <li>Dark Mode Support - A sleek and accessible dark mode for
                enhanced comfort at night.</li>
              <li>User Authentication - Firebase-powered sign-up and login to
                keep your plant data safe.</li>
            </ul>
          </div>

          {/* Challenges */}
          <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4">Challenges Faced</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Building a smooth, responsive UI with dynamic plant data</li>
              <li>Managing state efficiently for CRUD operations</li>
              <li>Implementing dark mode with seamless theme toggling</li>
              <li>Maintaining responsiveness and smooth animations on all devices</li>
            </ul>
          </div>

          {/* Future Plans */}
          <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4">Future Plans & Improvements</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Introduce plant care reminders and notifications</li>
              <li>Implement AI-based plant disease detection</li>
              <li>Enhance social features to share plant collections</li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="https://ph-a10-60ab6.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white transition"
            >
              <IoIosLink /> Live Preview
            </a>
            <a
              href="https://github.com/Rafi-Shariar/RateWise-Client-Side"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
            >
              <FaGithub /> Client Code
            </a>
            <a
              href="https://github.com/Rafi-Shariar/RateWise-Server-Side"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
            >
              <FaGithub /> Server Code
            </a>
            <NavLink to={'/'}>
              <button className="btn btn-outline btn-sm">Back to Home</button>
            </NavLink>
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="md:w-2/5 flex flex-col gap-6">
          <img data-aos="fade-up" src={R1} alt="Screenshot 1" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={R2} alt="Screenshot 2" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={R3} alt="Screenshot 3" className="rounded-xl shadow-lg" />
         
          <img data-aos="fade-up" src={R4} alt="Screenshot 3" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={R5} alt="Screenshot 3" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={R6} alt="Screenshot 3" className="rounded-xl shadow-lg" />
        </div>
      </div>

      <SparklesPreview></SparklesPreview>


    </div>
  );
};

export default PlantKeeperPage;
