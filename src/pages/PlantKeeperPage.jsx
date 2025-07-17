import React from 'react';
import { NavLink } from 'react-router';

const PlantKeeperPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <h1 className='block'>Comming Soon...</h1>
            <h1>
                <NavLink to={'/'}><button className='btn btn-soft'>Back to Home</button></NavLink>
            </h1>
            
        </div>
    );
};

export default PlantKeeperPage;