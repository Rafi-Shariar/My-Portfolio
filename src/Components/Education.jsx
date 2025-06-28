import React from "react";
import { IoBookSharp } from "react-icons/io5";
const Education = () => {
  const educationData = [
    {
      degree: "B.Sc in CSE",
      institution: "Daffodil International University, Dhaka",
      duration: "2023 – Present",
      details: "Current CGPA: 3.57",
    },
    {
      degree: "HSC (Science)",
      institution: "Govt. Shundarban Adarsha College, Khulna",
      duration: "2022",
      details: "GPA: 5.00",
    },
    {
      degree: "SSC (Science)",
      institution: "Sristy Central School and College, Khulna",
      duration: "2019",
      details: "GPA: 5.00",
    },
  ];

  return (
    <section className="w-full  mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-2 my-8">
              <IoBookSharp className="text-3xl text-primary" />
              <h2 className="text-3xl font-bold text-primary">
                Educationa
              </h2>
            </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-secondary">{edu.degree}</h3>
            <p className="text-gray-700 mt-1">{edu.institution}</p>
            <p className="text-sm text-gray-500 mt-1">{edu.duration}</p>
            {edu.details && <p className="text-sm text-gray-600 mt-2">{edu.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
