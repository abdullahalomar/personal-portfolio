import React from 'react';
import { useEffect } from 'react';
import Banner from '../Banner/Banner';
import About from './About';
import Experiences from './Experiences/Experiences';
import Projects from './Projects';
import Services from './Services';
import Summary from './Summary/Summary';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Experiences></Experiences>
            <Services></Services>
            <Summary></Summary>
            <Projects></Projects>
            <Testimonials></Testimonials>
        
           
        <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          bottom: '10px',
          right: '-15px',
        }}
      >
        <img src="https://img.icons8.com/external-others-iconmarket/64/000000/external-up-hand-gestures-others-iconmarket-3.png" /> 
      </button>
        </div>
    );
};

export default Home;