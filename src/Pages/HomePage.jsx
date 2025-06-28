import React from 'react';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import Skills from '../Components/Skills';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects/Projects';

const HomePage = () => {
    return (
        <div className='p-2'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default HomePage;