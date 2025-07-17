import React from 'react';
import ShinyText from '../ui/ShinyText';
import { TextGenerateEffect } from '../ui/TextGenerateEffect';
const words = `I'm Rafi Shariar, a passionate programmer from Khulna, Bangladesh, currently living in Dhaka. I'm pursuing my B.Sc. in Computer Science and Engineering at Daffodil International University .

My programming journey started back in school, where I discovered a strong curiosity for solving problems with code. I enjoy crafting user-friendly applications that address real-world challenges, whether that’s building small tools or complex systems.

I thrive when working on projects that allow me to combine creativity and logic, especially those that require collaboration and thoughtful time management to meet deadlines.

Outside of programming, I love traveling to new places and immersing myself in different cultures. Music is another passion of mine—it helps me relax and stay inspired. I value a balanced lifestyle that nurtures both my technical skills and personal growth.
`;
const AboutMe = () => {
    return (
        <div className='max-w-7xl mx-auto mt-16'>
            <div className='flex justify-center'>
                <ShinyText
              text="About Me"
              disabled={false}
              speed={2.5}
              className="text-4xl md:text-4xl font-bold"
            />
            </div>

            <div>
                <TextGenerateEffect words={words}/>

            </div>
        </div>
    );
};

export default AboutMe;