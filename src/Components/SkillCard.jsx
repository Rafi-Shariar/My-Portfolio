import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-4  h-28 flex flex-col items-center justify-center">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-10 h-10 object-contain mb-2"
      />
      <h1 className="text-[13px] text-center font-medium text-gray-500">
        {skill.skill}
      </h1>
    </div>
  );
};

export default SkillCard;
