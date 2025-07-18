import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { NavLink } from "react-router";
import Footer from '../components/homepage/Footer';
import ProjectNavbar from "../components/shared/ProjectNavbar";
import R1 from '../assets/Projects/Wedlyn/W1.png';
import R2 from '../assets/Projects/Wedlyn/W2.png';
import R3 from '../assets/Projects/Wedlyn/W3.png';
import R4 from '../assets/Projects/Wedlyn/W4.png';
import R5 from '../assets/Projects/Wedlyn/W5.png';
import R6 from '../assets/Projects/Wedlyn/W6.png';
import R7 from '../assets/Projects/Wedlyn/W7.png';
import R8 from '../assets/Projects/Wedlyn/W8.png';
import { SparklesPreview } from "../components/Skills/SparklesPreview";
import ScrollToTop from "../components/shared/ScrollToTop";

const WedlynPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <ScrollToTop/>
      <ProjectNavbar />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-16">
        {/* Left Column: Content */}
        <div className="md:w-3/5 space-y-8">
  <h1 className="text-5xl font-semibold">Wedlyn</h1>
  <p className="text-lg text-slate-300">Modern Matrimonial Platform</p>

  <p>
    <strong>Wedlyn</strong> is a modern, user-friendly matrimonial web application designed to simplify the process of finding a life partner. It allows users to create and manage biodata, connect with potential matches, and share their success stories—all within a secure and intuitive platform.
  </p>
  <p>
    With dedicated dashboards for both users and admins, Wedlyn ensures a seamless experience through every step of the matchmaking journey.
  </p>

  {/* Technologies */}
  <div>
    <h2 className="text-3xl font-semibold text-gray-400 mt-10">Technologies Used</h2>
    <p className="text-lg mt-3">
      <span className="font-semibold text-sky-400">Frontend:</span> React 19, Vite, Tailwind CSS, Flowbite, Framer Motion, AOS, Lottie, React Icons
    </p>
    <p className="text-lg mt-3">
      <span className="font-semibold text-sky-400">State & Data:</span> React Query (TanStack), Axios
    </p>
    <p className="text-lg mt-3">
      <span className="font-semibold text-sky-400">Backend & Auth:</span> Firebase Auth, Firebase Firestore, JWT (JSON Web Token)
    </p>
    <p className="text-lg mt-3">
      <span className="font-semibold text-sky-400">Utilities:</span> Recharts, SweetAlert2, React Hot Toast
    </p>
  </div>

  {/* Features */}
  <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
    <h2 className="text-3xl font-semibold text-gray-400 mb-4">Key Features</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Explore Biodatas - Browse a variety of user profiles to find compatible matches.</li>
      <li>Favorites - Save preferred biodatas to your favorites list for future access.</li>
      <li>Premium Contact Requests - Non-premium users can pay $5 via Stripe to unlock contact details.</li>
      <li>Success Stories - Read and share real success stories from happy couples.</li>
      <li>User Dashboard - Manage biodata, request premium status, and track contact requests.</li>
      <li>Admin Dashboard - Approve premium requests, manage contact approvals, and monitor platform statistics.</li>
    </ul>
  </div>

  {/* Challenges */}
  <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
    <h2 className="text-3xl font-semibold text-gray-400 mb-4">Challenges Faced</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Secure handling of sensitive user data using Firebase Auth and JWT</li>
      <li>Integrating Stripe for real-time payments and contact info access</li>
      <li>Efficient data fetching and management using React Query</li>
      <li>Building separate, role-based dashboards for users and admins</li>
    </ul>
  </div>

  {/* Future Plans */}
  <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
    <h2 className="text-3xl font-semibold text-gray-400 mb-4">Future Plans & Improvements</h2>
    <ul className="list-disc list-inside text-lg space-y-2">
      <li>Add real-time messaging between matched users</li>
      <li>Integrate AI-based match suggestions based on biodata analysis</li>
      <li>Implement user analytics for better matchmaking insights</li>
    </ul>
  </div>

  {/* Links */}
  <div className="flex flex-wrap items-center gap-4 mt-10">
    <a
      href="https://wedlyn-eb797.web.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-medium text-blue-600 border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white transition"
    >
      <IoIosLink /> Live Preview
    </a>
    <a
      href="https://github.com/Rafi-Shariar"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
    >
      <FaGithub /> Client Code
    </a>
    <a
      href="https://github.com/Rafi-Shariar"
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
          <img data-aos="fade-up" src={R3} alt="Screenshot 3" className="rounded-xl shadow-lg" />
         
          <img data-aos="fade-up" src={R4} alt="Screenshot 3" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={R5} alt="Screenshot 3" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={R6} alt="Screenshot 3" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={R7} alt="Screenshot 3" className="rounded-xl shadow-lg" />
        </div>
      </div>

      <SparklesPreview></SparklesPreview>


    </div>
  );
};

export default WedlynPage;
