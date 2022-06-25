import React from 'react';

const Experiences = () => {
    return (
        <div className='px-5'>
            <h2 className='text-3xl font-semibold text-secondary'>My Experiences</h2>
            <div className='bg-secondary w-52 h-0.5 mb-4' data-aos="fade-right" data-aos-duration="3000"></div>
            <div className='grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 border-2 rounded border-primary bg-gray-200' data-aos="zoom-in" data-aos-duration="3000">
                <div>
                    <img src="https://img.icons8.com/color/344/javascript--v2.png" alt="" width={120}/>
                </div>
                <div>
                    <img src="https://img.icons8.com/office/344/react.png" alt="" width={120}/>
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/480px-Tailwind_CSS_Logo.svg.png" alt="" width={140}/>
                </div>
                <div>
                    <img src="https://img.icons8.com/color/344/bootstrap.png" alt="" width={120}/>
                </div>
                <div>
                    <img src="https://img.icons8.com/color/344/firebase.png" alt="" width={120}/>
                </div>
                <div>
                    <img src="https://img.icons8.com/color/344/nodejs.png" alt="" width={120}/>
                </div>
                <div>
                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt="" width={120}/>
                </div>
            </div>
        </div>
    );
};

export default Experiences;