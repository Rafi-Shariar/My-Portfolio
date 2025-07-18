import React from 'react';
import Navbar from '../components/shared/Navbar';
import Banner from '../components/homepage/Banner';
import AboutMe from '../components/homepage/AboutMe';
import Skills from '../components/homepage/Skills';
import ProjectsContainer from '../components/projects/ProjectsContainer';
import Education from '../components/homepage/Education';
import LetsConnect from '../components/homepage/LetsConnect';
import ContactContainer from '../components/homepage/ContactContainer';
import Footer from '../components/homepage/Footer';
import ProblemSolving from '../components/homepage/ProblemSolving';

const HomePage = () => {
    return (
        <div className='min-h-screen bg-black text-base-100 p-2'>
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ProjectsContainer></ProjectsContainer>
            <Education></Education>
            <ProblemSolving></ProblemSolving>
            <LetsConnect></LetsConnect>
             <ContactContainer></ContactContainer>
            
        </div>
    );
};

export default HomePage;