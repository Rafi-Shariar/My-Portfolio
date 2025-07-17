import React from 'react';
import BannerContent from '../banner/BannerContent';

const Banner = () => {
    return (
        <div id='home' className='max-w-7xl mx-auto mt-6'>
            <div className=''>

                {/* Contain */}
                <section className=''>
                    <BannerContent></BannerContent>

                </section>


            </div>
            
        </div>
    );
};

export default Banner;