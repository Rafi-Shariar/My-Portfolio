import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import J1 from "../../assets/Projects/JobNest/J1.png";
import J2 from "../../assets/Projects/JobNest/J2.png";
import J3 from "../../assets/Projects/JobNest/J3.png";
import { IoIosArrowRoundBack } from "react-icons/io";

const JobNest = () => {
  return (
    <div className="p-3">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-blue-100 my-10">
        {/* Carousel Section */}
        <div className="">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full  border-b">
              <img src={J1} className="w-full object-cover" />
            </div>
            <div id="item2" className="carousel-item w-full  border-b">
              <img src={J2} className="w-full object-cover" />
            </div>
            <div id="item3" className="carousel-item w-full  border-b">
              <img src={J3} className="w-full object-cover" />
            </div>
          </div>
          <div className="flex justify-center gap-2 py-2">
            <a
              href="#item1"
              className="btn btn-xs bg-primary text-white font-bold"
            >
              1
            </a>
            <a
              href="#item2"
              className="btn btn-xs bg-primary text-white font-bold"
            >
              2
            </a>
            <a
              href="#item3"
              className="btn btn-xs bg-primary text-white font-bold"
            >
              3
            </a>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 md:p-10 flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">JobNest</h1>
            <p className="text-gray-500 mt-1 text-lg">Job Hunting Made Easy</p>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm">
              <strong>JobNest</strong> is a beginner-friendly job hunting
              platform that helps users find job opportunities quickly and
              easily. With company-based job listings, users can browse
              available positions from specific organizations and apply directly
              from the platform. This was my first major project, focused on
              simplicity, functionality, and foundational frontend development
              practices.
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
                Tailwind CSS, DaisyUI, React Router, React Icons
              </div>
              <div>
                <span className="font-medium">🧰 Utilities:</span> Motion UI,
                React Toastify, React CountUp
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              ✨ Key Features
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
              <li>🔐 Reliable and secure signup/signin</li>
              <li>🏢 Company-wise job listings</li>
              <li>📝 Users can apply for jobs directly</li>
              <li>📱 Responsive design for all devices</li>
            </ul>
          </div>

          {/* Challenges (Optional since it’s a first project) */}
          {/* Challenges Faced */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              🚧 Challenges Faced
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
              
              <li>Implementing routing with React Router for the first time</li>
              <li>
                Handling form input, validation, and local state effectively
              </li>
              <li>
                Understanding deployment workflows to publish the project on
                Netlify
              </li>
            </ul>
          </div>

          {/* Future Plans & Improvements */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              🚀 Future Plans & Improvements
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
              <li>
                Integrate Firebase or a backend server for real job application
                data
              </li>
              <li>
                Add filters by job category, location, and experience level
              </li>
              <li>Use a database to manage posted jobs and applied users</li>
            </ul>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://ph-jobnest.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white transition"
            >
              <IoIosLink /> Live Preview
            </a>
            <a
              href="https://github.com/Rafi-Shariar/JobNest-Client-Side"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-400 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
            >
              <FaGithub /> Client Code
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <a href="/" className="btn btn-primary">
          <IoIosArrowRoundBack className="text-lg" />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default JobNest;
