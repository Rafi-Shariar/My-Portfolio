import React from "react";
import point from "../../assets/Skills/git-commit-vertical.png";

const skillsData = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "React.js", "JavaScript",],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Firebase", "JWT", "REST API"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "Axios", "Vercel"],
  },
  {
    title: "Others",
    items: ["C++", "Data Structures", "Algorithms", "OOP", "Problem Solving"],
  },
];

const SkillsContainer = () => {
  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skillsData.map((section) => (
          <div
            key={section.title}
            className="bg-[#16161a] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-sky-700 mb-4 border-b border-gray-600 pb-2">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-base text-gray-300"
                >
                  <img src={point} alt="•" className="h-5" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
