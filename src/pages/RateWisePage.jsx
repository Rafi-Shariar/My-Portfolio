import React from "react";
import RatewiseCourasel from "../components/RateWise/RatewiseCourasel";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import Footer from '../components/homepage/Footer';
import ProjectNavbar from "../components/shared/ProjectNavbar";
import { NavLink } from "react-router";
const RateWisePage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
        <ProjectNavbar></ProjectNavbar>
      <div className="max-w-7xl mx-auto pb-16">
        <RatewiseCourasel></RatewiseCourasel>

        <div className="mt-6">
          <h1 className="text-5xl font-semibold">RateWise</h1>
          <p className="text-lg text-slate-300">Service Review Platform</p>

          <p className="mt-6">
            <strong>RateWise</strong> is a modern, user-driven service review
            platform that allows people to discover services, read authentic
            user reviews, and contribute their own experiences. Designed with an
            emphasis on clean UI/UX and community engagement, RateWise ensures
            both usability and visual appeal. Whether it's rating a local
            service provider or discovering top-rated businesses, users can
            engage meaningfully with a growing service ecosystem.
          </p>

          <div>
            <h1 className="text-3xl font-semibold text-gray-400 mt-16">
              {" "}
              Technologies Used
            </h1>
            <h1 className="text-lg mt-3">
              <span className="font-semibold text-sky-900">Frontend:</span>{" "}
              React, Tailwind CSS, DaisyUI, Framer Motion, React Router, Lottie,
              Icons, CountUp, Slick Carousel, Fast Marquee
            </h1>
            <h1 className="text-lg mt-3">
              <span className="font-semibold text-sky-900">
                Backend & Auth:
              </span>{" "}
              Firebase Authentication, Firestore Database & Hosting
            </h1>
            <h1 className="text-lg mt-3">
              {" "}
              <span className="font-semibold text-sky-900">
                Utilities:
              </span>{" "}
              Axios, Date-fns, React Toastify, SweetAlert2
            </h1>
          </div>

          <div className="bg-[#16161a] p-10 mt-16 rounded-3xl">
            <div>
              <h1 className="text-3xl font-semibold text-gray-400">
                {" "}
                Key Features
              </h1>

              <ul className="list-disc list-inside text-lg mt-2 space-y-1 mb-8">
                <li>
                  Secure login, registration, and route protection via Firebase
                  Auth
                </li>
                <li> Dynamic service listing with average user ratings</li>
                <li> Read and write detailed user reviews</li>
                <li>
                  Authenticated users can add their own services and ratings
                </li>
                <li> Fully responsive and clean user interface</li>
              </ul>
            </div>

            <div className="divider before:bg-white after:bg-white text-white"></div>

            <div>
              <h1 className="text-3xl font-semibold text-gray-400 mt-10">
                {" "}
                Challenges Faced
              </h1>
              <ul className="list-disc list-inside text-lg mt-2 space-y-1 mb-8">
                <li>Managing Firestore rules and securing read/write access</li>
                <li>Setting up dynamic route protection with Firebase Auth</li>
                <li>
                  Ensuring real-time sync of services and reviews across UI
                </li>
                <li>
                  Maintaining responsiveness and smooth animations on all
                  devices
                </li>
              </ul>
            </div>

             <div className="divider before:bg-white after:bg-white text-white"></div>
            <div>
              <h1 className="text-3xl font-semibold text-gray-400 mt-8">
                {" "}
                Future Plans & Improvements
              </h1>
              <ul className="list-disc list-inside text-lg mt-2 space-y-1">
                <li>
                  Introduce filtering by service category, location, and rating
                </li>
                <li>Implement pagination and performance optimizations</li>
                <li>Use AI for sentiment analysis and review summarization</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mt-6">
              <div className="flex flex-wrap gap-4 mt-6">
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
                className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
              >
                <FaGithub /> Client Code
              </a>
              <a
                href="https://github.com/Rafi-Shariar/RateWise-Server-Side"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
              >
                <FaGithub /> Server Code
              </a>
              </div>

              <div>
                 <NavLink to={'/'}><button className='btn btn-soft'>Back to Home</button></NavLink>
              </div>
            </div>
        </div>
      </div>

      <Footer></Footer>

    </div>
  );
};

export default RateWisePage;
