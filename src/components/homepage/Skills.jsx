import React from 'react';
import ShinyText from '../ui/ShinyText';
import SkillsContainer from '../Skills/SkillsContainer';
const Skills = () => {
    return (
        <div id='skills' className='max-w-7xl mx-auto mt-16'>
            <div className='flex justify-center mb-6'>
                <ShinyText
              text="Skills"
              disabled={false}
              speed={2.5}
              className="text-4xl md:text-4xl font-bold"
            />
            </div>

            <div>
                <SkillsContainer></SkillsContainer>
            </div>
            
        </div>
    );
};

export default Skills;