import React from 'react';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import Skills from '../Components/Skills';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects/Projects';
import Education from '../Components/Education';
import LetsConnect from '../Components/LetsConnect';

const HomePage = () => {
    return (
        <div className='p-3'>
            <Banner></Banner>
            <section>
                <AboutMe></AboutMe>
            </section>
            <section className=''>
                <Skills></Skills>
            </section>
            <Projects></Projects>
            <Education></Education>
            <LetsConnect></LetsConnect>
            
        </div>
    );
};

export default HomePage;