import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const AboutMe = () => {
  return (
    <section  id="about" className="py-8 lg:py-14 px-4 bg-primary/10 rounded-2xl">
      <div  className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-3">
            <IoPersonCircleOutline className="text-5xl text-primary" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
              About Me
            </h2>
          </div>
        </div>

        {/* Content Card */}
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="bg-white rounded-2xl shadow-xl p-8 text-gray-700 leading-relaxed space-y-6 text-[15px] sm:text-base text-center">
          <p>
            I'm <strong>Rafi Shariar</strong>, a passionate programmer from{" "}
            <strong>Khulna, Bangladesh</strong>, currently living in{" "}
            <strong>Dhaka</strong>. I'm pursuing my B.Sc. in Computer Science
            and Engineering at{" "}
            <strong>Daffodil International University</strong>.
          </p>

          <p>
            My programming journey started back in school, where I discovered a strong curiosity for solving problems with code. I enjoy crafting user-friendly applications that address real-world challenges, whether that’s building small tools or complex systems.
          </p>

          <p>
            I thrive when working on projects that allow me to combine creativity and logic, especially those that require collaboration and thoughtful time management to meet deadlines.
          </p>

          <p>
Outside of programming, I love traveling to new places and immersing myself in different cultures. Music is another passion of mine—it helps me relax and stay inspired. I value a balanced lifestyle that nurtures both my technical skills and personal growth.          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
