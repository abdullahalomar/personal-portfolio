import React from 'react';
import useServices from '../../hooks/useServices';
import Service from './Service';


const Services = () => {

    const [services, setServices] = useServices();

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-7 px-5'>
            <div className='py-12'>
                <h2 className='text-3xl text-secondary font-semibold'>Services</h2>
                <div className='bg-secondary w-28 h-0.5' data-aos="fade-right" data-aos-duration="3000"></div>
                <h2 className='text-4xl font-bold py-5'>I can make this <br /> awesome things</h2>
                <h2 className='text-1xl'>I understand what your business means to you, your requirements considering trends.</h2>
            </div>


            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                 }
            </div>
        </div>
    );
};

export default Services;