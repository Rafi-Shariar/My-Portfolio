import React from "react";
import { GoProjectSymlink } from "react-icons/go";
import R1 from "../../assets/Projects/RateWise/R1.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import P1 from "../../assets/Projects/PlantKeeper/P1.png";
import J1 from "../../assets/Projects/J1.png";
import { Link } from "react-router";
const Projects = () => {
  return (
    <div id="projects" className="bg-white lg:pt-5 pb-14 rounded-4xl shadow-xl p-4">
      {/* title */}
      <div className="flex items-center justify-center gap-2 mb-8 mt-4">
        <GoProjectSymlink className="text-3xl text-primary" />
        <h2 className="text-3xl font-bold text-primary">Projects</h2>
      </div>

      {/* Projects Card */}
      <div>
        {/* Project 1 */}
        <div data-aos="fade-up"
     data-aos-duration="1000" className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl max-w-5xl mx-auto overflow-hidden transition hover:shadow-xl mt-5 border border-blue-100">
          {/* Banner Image Section */}
          <section className="md:w-1/2 bg-blue-50 p-6 flex items-center justify-center">
            <div className="rounded-2xl">
              <img
                src={R1}
                alt="RateWise Banner"
                className="w-full  object-contain rounded-xl"
              />
            </div>
          </section>

          {/* Content Section */}
          <section className="md:w-1/2 p-6 flex flex-col justify-center gap-6">
            {/* Title and Description */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">RateWise</h1>
              <p className="text-base text-gray-500 mt-1">
                Service Review Platform
              </p>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                RateWise is a modern, user-driven service review platform that
                allows people to discover services, read real user reviews, and
                contribute their own experiences.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {["React", "Firebase", "Express.js", "JWT", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://a11-ratewise.web.app/"
                target="_blank"
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <IoIosLink />
                Preview
              </a>

              <a
                href="https://github.com/Rafi-Shariar/RateWise-Client-Side"
                target="_blank"
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <FaGithub />
                Client
              </a>

              <a
                href="https://github.com/Rafi-Shariar/RateWise-Server-Side"
                target="_blank"
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <FaGithub />
                Server
              </a>
              <Link
                to={'/projects/ratewise'}
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <FaExternalLinkAlt />
                Details
              </Link>
            </div>
          </section>
        </div>

        {/* Project 2 */}
        <div data-aos="fade-up"
     data-aos-duration="1000" className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl max-w-5xl mx-auto overflow-hidden transition hover:shadow-xl mt-10 border border-green-100">
          {/* Banner Image Section */}
          <section className="md:w-1/2 bg-green-50 p-6 flex items-center justify-center">
            <div className="rounded-2xl">
              <img
                src={P1}
                alt="RateWise Banner"
                className="w-full  object-contain rounded-xl"
              />
            </div>
          </section>

          {/* Content Section */}
          <section className="md:w-1/2 p-6 flex flex-col justify-center gap-6">
            {/* Title and Description */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">PlantKeeper</h1>
              <p className="text-base text-gray-500 mt-1">
                Plant Care Platfrom
              </p>
              <p className="mt-4 text-xm text-gray-600 leading-relaxed">
                PlantKeeper is a modern, user-friendly web application built to
                simplify the life of plant lovers. Whether you’re new to plant
                care or an experienced gardener, PlantKeeper helps you keep
                track of plant routines, discover new species, and maintain a
                well-organized digital garden.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {["React", "Firebase", "Express.js", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://ph-a10-60ab6.web.app/"
                target="_blank"
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <IoIosLink />
                Preview
              </a>

              <a
                href="https://github.com/Rafi-Shariar/PlantKeeper-Client-Side"
                target="_blank"
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <FaGithub />
                Client
              </a>

              <a
                href="https://github.com/Rafi-Shariar/PlantKeeper-Server-Side"
                target="_blank"
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <FaGithub />
                Server
              </a>
              <Link
                to={'/projects/plantKeeper'}
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <FaExternalLinkAlt />
                Details
              </Link>
            </div>
          </section>
        </div>

        {/* Project 3 */}
        <div data-aos="fade-up"
     data-aos-duration="1000" className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl max-w-5xl mx-auto overflow-hidden transition hover:shadow-xl mt-10 border border-blue-100">
          {/* Banner Image Section */}
          <section className="md:w-1/2 bg-blue-200 p-6 flex items-center justify-center">
            <div className="rounded-2xl">
              <img
                src={J1}
                alt="RateWise Banner"
                className="w-full  object-contain rounded-xl"
              />
            </div>
          </section>

          {/* Content Section */}
          <section className="md:w-1/2 p-6 flex flex-col justify-center gap-6">
            {/* Title and Description */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800">JobNest</h1>
              <p className="text-base text-gray-500 mt-1">
                Job Hunting Platfrom
              </p>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                JobHuntPro is a modern, user-centric platform designed to
                streamline the job search experience. Whether you're a recent
                graduate or a seasoned professional, JobHuntPro helps you
                discover job opportunities, apply seamlessly, and stay organized
                throughout your career journey.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {["React", "Firebase"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://ph-jobnest.netlify.app/"
                target="_blank"
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <IoIosLink />
                Preview
              </a>

              <a
                href="https://github.com/Rafi-Shariar/JobNest-Client-Side"
                target="_blank"
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <FaGithub />
                Client
              </a>

              <Link
                to={'/projects/jobNest'}
                className="text-sm text-primary   font-medium transition btn btn-soft btn-secondary hover:text-white"
              >
                <FaExternalLinkAlt />
                Details
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
