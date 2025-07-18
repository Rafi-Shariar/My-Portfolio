import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { NavLink } from "react-router";
import Footer from '../components/homepage/Footer';
import ProjectNavbar from "../components/shared/ProjectNavbar";
import R1 from '../assets/Projects/RateWise/R1.png';
import R2 from '../assets/Projects/RateWise/R2.png';
import R3 from '../assets/Projects/RateWise/R3.png';
import R5 from '../assets/Projects/RateWise/R5.png';
import R6 from '../assets/Projects/RateWise/R6.png';
import { SparklesPreview } from "../components/Skills/SparklesPreview";
import ScrollToTop from "../components/shared/ScrollToTop";

const RateWisePage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <ScrollToTop/>
      <ProjectNavbar />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-16">
        {/* Left Column: Content */}
        <div className="md:w-3/5 space-y-8">
          <h1 className="text-5xl font-semibold">RateWise</h1>
          <p className="text-lg text-slate-300">Service Review Platform</p>

          <p>
            <strong>RateWise</strong> is a modern, user-driven service review platform that allows people to discover services, read authentic user reviews, and contribute their own experiences. Designed with an emphasis on clean UI/UX and community engagement, RateWise ensures both usability and visual appeal.
          </p>
          <p>
            Whether it's rating a local service provider or discovering top-rated businesses, users can engage meaningfully with a growing service ecosystem.
          </p>

          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-400 mt-10">Technologies Used</h2>
            <p className="text-lg mt-3">
              <span className="font-semibold text-sky-400">Frontend:</span> React, Tailwind CSS, DaisyUI, Framer Motion, React Router, Lottie, Icons, CountUp, Slick Carousel, Fast Marquee
            </p>
            <p className="text-lg mt-3">
              <span className="font-semibold text-sky-400">Backend & Auth:</span> Firebase Authentication, Firestore Database & Hosting
            </p>
            <p className="text-lg mt-3">
              <span className="font-semibold text-sky-400">Utilities:</span> Axios, Date-fns, React Toastify, SweetAlert2
            </p>
          </div>

          {/* Features */}
          <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Secure login, registration, and route protection via Firebase Auth</li>
              <li>Dynamic service listing with average user ratings</li>
              <li>Read and write detailed user reviews</li>
              <li>Authenticated users can add their own services and ratings</li>
              <li>Fully responsive and clean user interface</li>
            </ul>
          </div>

          {/* Challenges */}
          <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4">Challenges Faced</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Managing Firestore rules and securing read/write access</li>
              <li>Setting up dynamic route protection with Firebase Auth</li>
              <li>Ensuring real-time sync of services and reviews across UI</li>
              <li>Maintaining responsiveness and smooth animations on all devices</li>
            </ul>
          </div>

          {/* Future Plans */}
          <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4">Future Plans & Improvements</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Introduce filtering by service category, location, and rating</li>
              <li>Implement pagination and performance optimizations</li>
              <li>Use AI for sentiment analysis and review summarization</li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="https://a11-ratewise.web.app/"
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
         
          <img data-aos="fade-up" src={R5} alt="Screenshot 3" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={R6} alt="Screenshot 3" className="rounded-xl shadow-lg" />
        </div>
      </div>

      <SparklesPreview></SparklesPreview>


    </div>
  );
};

export default RateWisePage;
