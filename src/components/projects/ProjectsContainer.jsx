import React from 'react';
import ShinyText from '../ui/ShinyText';
import {SparklesPreview} from '../Skills/SparklesPreview';
import RateWiseCard from './RateWiseCard';
import PlantKeeperCard from './PlantKeeperCard';
const ProjectsContainer = () => {
    return (
        <div className='max-w-7xl mx-auto mt-16 bg-[#16161a] rounded-3xl'>
            <div className='flex justify-center mb-6'>
                <ShinyText
              text="Projects"
              disabled={false}
              speed={2.5}
              className="text-4xl md:text-4xl font-bold mt-10"
            />
            </div>

            <div className='pb-6'>
                <RateWiseCard></RateWiseCard>
                <PlantKeeperCard></PlantKeeperCard>
            </div>
        </div>
    );
};

export default ProjectsContainer;