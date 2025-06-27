import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const AboutMe = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto h-[300px]  bg-secondary/20 rounded-3xl mt-10">
      <div className="max-w-4xl mx-auto text-center p-5">
        {/* Icon and Title */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <IoPersonCircleOutline className="text-4xl text-primary" />
          <h2 className="text-3xl font-bold text-primary">About Me</h2>
        </div>

        {/* Details */}
        <div className="bg-white shadow-xl shadow-primary/70 rounded-xl p-6 text-gray-700 leading-relaxed text-[15px] sm:text-base">
          <p>
            I'm <strong>Rafi Shariar</strong>, a passionate programmer from{" "}
            <strong>Khulna, Bangladesh</strong>, currently based in{" "}
            <strong>Dhaka</strong>. I'm pursuing my B.Sc. in Computer Science
            and Engineering at{" "}
            <strong>Daffodil International University</strong>.
          </p>
          <br />
          <p>
            My journey began during my school days in Khulna, where I developed
            a strong interest in programming. Over time, I discovered a love for
            building user-friendly applications that solve real-world problems.
          </p>
          <p>
            I’m driven by the challenge of creating impactful solutions — from
            small tools to full systems — using technology to improve everyday
            life.
          </p>
          <br />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
