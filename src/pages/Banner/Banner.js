import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../../images/cartoon-logo-1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    return (
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-12 '>
        <div className='mt-20 px-auto' data-aos="fade-right" data-aos-duration="3000">
        <h1 class="text-5xl font-bold">I'm Abdullah Al <br /> Omar <span className='text-secondary'>here</span></h1>
          <p class="py-10 text-3xl font-medium font-semibold">Full stack web developer</p>
          <Link to='/contact' class="btn btn-primary">REACH ME</Link> 
        </div>
        <div className='mt-5'
          data-aos="zoom-in"
          data-aos-duration="3000">
          <img src={myImage} alt="" width={400} />
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width={1000} viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,202.7C213.3,213,267,235,320,240C373.3,245,427,235,480,213.3C533.3,192,587,160,640,138.7C693.3,117,747,107,800,106.7C853.3,107,907,117,960,133.3C1013.3,149,1067,171,1120,181.3C1173.3,192,1227,192,1280,176C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg> */}
      </div>
    );
};
AOS.init();
export default Banner;