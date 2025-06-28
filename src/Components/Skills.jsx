import React from "react";
import { FaCode } from "react-icons/fa";
import html from '../assets/Skills/html.png';
import SkillCard from "./SkillCard";
import CssImg from '../assets/Skills/css-3.png'
import tailwindImg from '../assets/Skills/tailwind.png'
import reactImg from '../assets/Skills/atom.png'
import nodeImg from '../assets/Skills/programing.png'
import firebaseImg from '../assets/Skills/firebase.png'
import mongoImg from '../assets/Skills/mongo.png'
import sqlImg from '../assets/Skills/sql-server.png'
import CImg from '../assets/Skills/c-.png'
import DSImg from '../assets/Skills/connection.png'
import AImg from '../assets/Skills/letter-a.png'
import githubImg from '../assets/Skills/github.png'

const skills = [
  { id:1, skill: "HTML", icon: html },
  { id:2,skill: "CSS", icon: CssImg },
  { id:3,skill: "Tailwind CSS", icon: tailwindImg },
  { id:4,skill: "React", icon:reactImg  },
  { id:5,skill: "Node.js", icon: nodeImg },
  { id:6,skill: "Firebase", icon: firebaseImg },
  { id:7,skill: "MongoDB", icon: mongoImg },

  { id:8,skill: "MySQL", icon: sqlImg },
  { id:9,skill: "C++", icon: CImg },
  { id:10,skill: "Data Structures", icon: DSImg },
  { id:11,skill: "Algorithms", icon: AImg },
  { id:12,skill: "Github", icon: githubImg },
];


const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 mt-40 md:mt-24 lg:mt-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-8 mt-40 md:mt-0">
          <FaCode className="text-3xl text-primary" />
          <h2 className="text-3xl font-bold text-primary">Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 text-sm sm:text-base">
          {skills.map( skill => <SkillCard skill={skill} key={skill.id}></SkillCard>)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
