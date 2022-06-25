import React from 'react';
import myImg from '../../images/11.png';
import resume from '../../../src/files/Abdullah-Al-Omar Resume.pdf';

const About = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
          <img src={myImg} class="rounded-lg shadow-2xl"
            data-aos="fade-right"
            data-aos-duration="2000"
            width={400} />
    <div>
            <h1 class="text-5xl font-bold">About <span className='text-secondary'>Me</span></h1>
            <div className='bg-secondary w-52 h-0.5' data-aos="fade-left" data-aos-duration="3000"></div>
      <p class="py-6">Assalamualaikum all of you. I'm a student. I belong to an aristocratic muslim family. I like to challanges & learning new things. My specialty is that I'm extrovert in nature. I dont like gossiping. I like to lead simple life. My favorite color's blue, book The Holy Quran, person's Hajrat Muhammad (S).</p>
            <a href={resume} className="btn btn-primary" download="Abdullah-Al-Omar Resume.pdf"><svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg> Download CV</a>
    </div>
  </div>
</div>
    );
};

export default About;