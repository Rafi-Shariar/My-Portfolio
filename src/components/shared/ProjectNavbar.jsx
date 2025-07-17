import React from 'react';
import logo from '../../assets/logo/logo.png'
import { NavLink } from 'react-router';
const ProjectNavbar = () => {
    return (
        <div>
            <div className="sticky z-1000 top-0">
                  <div className="navbar bg-black max-w-7xl mx-auto pt-2">
                    <div className="navbar-start">
            
                      <div className="flex items-center">
                        <img src={logo} alt="" className="w-12 bg-white rounded-full" />
                        <a className="btn btn-ghost text-2xl hidden md:inline">
                          Rafi <span className="font-light">Shariar</span>
                        </a>
                      </div>
                    </div>
            
                    <div className="navbar-center hidden lg:flex">
                      
                    </div>
                    <div className="navbar-end">
                        <NavLink to={'/'}><button className='btn btn-soft'>Back to Home</button></NavLink>
                      
                    </div>
                  </div>
                </div>
            
        </div>
    );
};

export default ProjectNavbar;