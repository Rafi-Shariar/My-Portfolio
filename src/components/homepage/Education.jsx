import React from 'react';
import ShinyText from '../ui/ShinyText';

const Education = () => {
    return (
        <div className='mt-16'>
            <div className='flex justify-center mb-6'>
                <ShinyText
              text="Education"
              disabled={false}
              speed={2.5}
              className="text-4xl md:text-4xl font-bold"
            />
            </div>

            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>

                <div className='border p-5 rounded-2xl border-slate-300 flex flex-col gap-1 bg-gradient-to-tr from-gray-900 to-gray-700'>
                    <h1 className='text-2xl'>B.Sc in CSE</h1>
                    <p className='text-gray-200'>Daffodil International University, Dhaka.</p>
                    <p className='text-gray-400'>2023 - Present</p>
                    <p className='text-sm text-gray-400'>Avarage CGPA: 3.57</p>
                </div>

                <div className='border p-5 rounded-2xl border-slate-300 flex flex-col gap-1 bg-gradient-to-tr from-gray-900 to-gray-700'>
                    <h1 className='text-2xl'>HSC (Science)</h1>
                    <p className='text-gray-200'>Govt. Shundarban Adarsha College, Khulna</p>
                    <p className='text-gray-400'>2022</p>
                    <p className='text-sm text-gray-400'>GPA: 5.00</p>
                </div>

                <div className='border p-5 rounded-2xl border-slate-300 flex flex-col gap-1 bg-gradient-to-tr from-gray-900 to-gray-700'>
                    <h1 className='text-2xl'>SSC (Science)</h1>
                    <p className='text-gray-200'>Sristy Central School and College, Khulna</p>
                    <p className='text-gray-400'>2019</p>
                    <p className='text-sm text-gray-400'>GPA: 5.00</p>
                </div>

            </div>
        </div>
    );
};

export default Education;