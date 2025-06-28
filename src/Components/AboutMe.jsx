import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto h-[400px]  bg-secondary/20 rounded-3xl mt-10"
    >
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
            My programming journey started back in school, where I discovered a
            strong curiosity for solving problems with code. I enjoy crafting
            user-friendly applications that address real-world challenges,
            whether that’s building small tools or complex systems.
          </p> <br />
          <p>
            I thrive when working on projects that allow me to combine
            creativity and logic, especially those that require collaboration
            and thoughtful time management to meet deadlines.
          </p> <br />
          <p>
            Outside of programming, I love traveling to new places and immersing
            myself in different cultures. Music is another passion of mine—it
            helps me relax and stay inspired. I value a balanced lifestyle that
            nurtures both my technical skills and personal growth.
          </p>
          <br />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
