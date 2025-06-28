import React from "react";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import R1 from "../../assets/Projects/RateWise/R1.png";
import R2 from "../../assets/Projects/RateWise/R2.png";
import R3 from "../../assets/Projects/RateWise/R3.png";
import { IoIosArrowRoundBack } from "react-icons/io";

const RateWise = () => {
  return (
    <div className="p-3">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-blue-100 my-10">
        {/* Carousel Banner */}
        <div>
          <div className="carousel w-full">
            <div
              id="item1"
              className="carousel-item w-full lg:h-[500px] border-b"
            >
              <img src={R1} className="w-full" />
            </div>
            <div
              id="item2"
              className="carousel-item w-full lg:h-[500px] border-b"
            >
              <img src={R2} className="w-full" />
            </div>
            <div
              id="item3"
              className="carousel-item w-full lg:h-[500px] border-b"
            >
              <img src={R3} className="w-full" />
            </div>
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
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

          {/* Info Section */}
          <div className="p-6 md:p-10 flex flex-col gap-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">RateWise</h1>
              <p className="text-gray-500 mt-1 text-lg">
                Service Review Platform
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                <strong>RateWise</strong> is a modern, user-driven service
                review platform that allows people to discover services, read
                authentic user reviews, and contribute their own experiences.
                Designed with an emphasis on clean UI/UX and community
                engagement, RateWise ensures both usability and visual appeal.
                Whether it's rating a local service provider or discovering
                top-rated businesses, users can engage meaningfully with a
                growing service ecosystem.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                🔧 Technologies Used
              </h2>
              <div className="mt-2 space-y-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">🚀 Frontend:</span> React,
                  Tailwind CSS, DaisyUI, Framer Motion, React Router, Lottie,
                  Icons, CountUp, Slick Carousel, Fast Marquee
                </div>
                <div>
                  <span className="font-medium">🔐 Backend & Auth:</span>{" "}
                  Firebase Authentication, Firestore Database & Hosting
                </div>
                <div>
                  <span className="font-medium">🧰 Utilities:</span> Axios,
                  Date-fns, React Toastify, SweetAlert2
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                ✨ Key Features
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>
                  🔐 Secure login, registration, and route protection via
                  Firebase Auth
                </li>
                <li>📜 Dynamic service listing with average user ratings</li>
                <li>💬 Read and write detailed user reviews</li>
                <li>
                  ➕ Authenticated users can add their own services and ratings
                </li>
                <li>🎯 Fully responsive and clean user interface</li>
              </ul>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                🚧 Challenges Faced
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
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

            {/* Future Improvements */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                🚀 Future Plans & Improvements
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>
                  Introduce filtering by service category, location, and rating
                </li>
                <li>Implement pagination and performance optimizations</li>
                <li>Use AI for sentiment analysis and review summarization</li>
              </ul>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-4 mt-4">
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
          </div>
        </div>
      </div>

      <div className="flex justify-center">
              <a href="/" className="btn btn-primary"><IoIosArrowRoundBack className="text-lg"/>Back to Home</a>
        </div>
    </div>
  );
};

export default RateWise;
