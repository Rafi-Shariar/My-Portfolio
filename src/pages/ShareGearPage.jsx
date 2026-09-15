import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { NavLink } from "react-router";
import Footer from "../components/homepage/Footer";
import ProjectNavbar from "../components/shared/ProjectNavbar";
import ScrollToTop from "../components/shared/ScrollToTop";
import { SparklesPreview } from "../components/Skills/SparklesPreview";

// ShareGear Screenshots (আপনার ফোল্ডারের পাথ ও নাম অনুযায়ী প্রয়োজনমতো অ্যাডজাস্ট করে নিন)
import S1 from "../assets/Projects/ShareGear/Banner.png";
import S2 from "../assets/Projects/ShareGear/S1.png";
import S3 from "../assets/Projects/ShareGear/S2.png";
import S4 from "../assets/Projects/ShareGear/S3.png";
import S5 from "../assets/Projects/ShareGear/S4.png";
import S6 from "../assets/Projects/ShareGear/S5.png";

const ShareGearPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <ScrollToTop />
      <ProjectNavbar />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-16">
        {/* Left Column: Content */}
        <div className="md:w-3/5 space-y-8">
          <h1 className="text-5xl font-semibold text-blue-600">ShareGear</h1>
          <p className="text-lg text-slate-300">
            Peer-to-Peer Gear & Equipment Rental Platform
          </p>

          <p>
            <strong>ShareGear</strong> is a modern peer-to-peer gear rental platform designed to connect equipment owners with renters for seamless, short-term indoor and outdoor equipment leasing.
          </p>
          <p>
            Whether you need professional camera kits, camping gear, or power tools, ShareGear provides an end-to-end booking flow, secure payment transactions, and tailored dashboards for users, providers, and administrators.
          </p>

          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-400 mt-10">Technologies Used</h2>
            <p className="text-lg mt-3">
              <span className="font-semibold text-blue-500">Frontend:</span> Next.js, React 19, TypeScript, Tailwind CSS, Shadcn UI, Radix UI, Lucide Icons, GSAP, Swiper
            </p>
            <p className="text-lg mt-3">
              <span className="font-semibold text-blue-500">State & Data:</span> TanStack Query (React Query), Zustand, React Hook Form, Zod
            </p>
            <p className="text-lg mt-3">
              <span className="font-semibold text-blue-500">Backend & ORM:</span> Node.js, Express.js 5, TypeScript, PostgreSQL, Prisma ORM (@prisma/adapter-pg)
            </p>
            <p className="text-lg mt-3">
              <span className="font-semibold text-blue-500">Auth & Payments:</span> JWT (jsonwebtoken, jwt-decode), Cookie Parser, Bcryptjs, Stripe API
            </p>
          </div>

          {/* Features */}
          <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>
                <span className="font-semibold text-blue-500">Gear Exploration & Filters</span> - Browse curated listings across indoor and outdoor equipment categories with instant search.
              </li>
              <li>
                <span className="font-semibold text-blue-500">Role-Based Access Control (RBAC)</span> - Custom middleware handling authentication & permissions for Users, Providers, and Admins.
              </li>
              <li>
                <span className="font-semibold text-blue-500">Seamless Stripe Checkout</span> - Secure direct booking flow and automated payment processing integrated with Stripe.
              </li>
              <li>
                <span className="font-semibold text-blue-500">Provider Listing Engine</span> - Enables equipment owners to add, manage, price, and track availability of their inventory.
              </li>
              <li>
                <span className="font-semibold text-blue-500">Comprehensive Dashboards</span> - Dedicated interfaces for tracking active bookings, revenue, and product lifecycles.
              </li>
              <li>
                <span className="font-semibold text-blue-500">Optimized State & Caching</span> - Blazing fast UI updates with optimistic responses powered by TanStack Query and Zustand.
              </li>
            </ul>
          </div>

          {/* Challenges */}
          <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4">Challenges Faced</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Architecting a relational database schema in PostgreSQL with Prisma ORM for multi-party bookings and availability dates.</li>
              <li>Building custom JWT authentication middleware with cookie storage to safely guard role-specific endpoints.</li>
              <li>Handling secure Stripe checkout webhooks and error-free payment verification flows.</li>
              <li>Synchronizing client-side state efficiently across dynamic rental filters and interactive calendars using Zustand and React Query.</li>
            </ul>
          </div>

          {/* Future Plans */}
          <div className="bg-[#16161a] p-8 mt-10 rounded-3xl">
            <h2 className="text-3xl font-semibold text-gray-400 mb-4">Future Plans & Improvements</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Add an in-app real-time messaging system between renters and equipment providers.</li>
              <li>Implement an automated security deposit holding and refund mechanism.</li>
              <li>Integrate interactive map-based location search for nearby gear pickups.</li>
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="https://share-gear.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-blue-500 border border-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white transition"
            >
              <IoIosLink className="text-lg" /> Live Preview
            </a>
            <a
              href="https://github.com/Rafi-Shariar/A5-RentGear"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
            >
              <FaGithub /> Client Code
            </a>
            {/* <a
              href="https://github.com/Rafi-Shariar/ShareGear-Server"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 border border-gray-600 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
            >
              <FaGithub /> Server Code
            </a> */}
            <NavLink to={"/"}>
              <button className="btn btn-outline btn-sm">Back to Home</button>
            </NavLink>
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="md:w-2/5 flex flex-col gap-6">
          <img data-aos="fade-up" src={S1} alt="ShareGear Banner" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={S2} alt="ShareGear Screenshot 1" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={S3} alt="ShareGear Screenshot 2" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={S4} alt="ShareGear Screenshot 3" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={S5} alt="ShareGear Screenshot 4" className="rounded-xl shadow-lg" />
          <img data-aos="fade-up" src={S6} alt="ShareGear Screenshot 5" className="rounded-xl shadow-lg" />
        </div>
      </div>

      <SparklesPreview />
    </div>
  );
};

export default ShareGearPage;