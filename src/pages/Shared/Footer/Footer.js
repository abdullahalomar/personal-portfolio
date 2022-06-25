import React from 'react';
import facebook from '../../../images/brands/icons8-facebook-50.png';
import youtube from '../../../images/brands/icons8-youtube-48.png';
import twitter from '../../../images/brands/icons8-twitter-48.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        
  <footer class="footer p-10 bg-secondary text-white mt-6">
  <div>
    <span class="text-2xl font-bold">Abdullah AL Omar</span> 
    <p>I am always at your service. Let me know about your service, <br /> I am ready for your service.</p>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <Link to="/about">About us</Link> 
    <Link to="/contact">Contact</Link> 
    <Link to="/services">services</Link> 
    <Link to="/all-projects">Projects</Link>
  </div> 
  <div>
    <span class="footer-title">Social</span> 
    <div class="grid grid-flow-col gap-4">
      <a href='https://twitter.com/Abdulla20600750'><img src={twitter} alt="" /></a>
      <a href='https://www.youtube.com/c/AbdullahAlOmar'><img src={youtube} alt="" /></a>
      <a href="https://www.facebook.com/Abdullahalomar2000"><img src={facebook} alt="" /></a>
      </div>
      <div className='mt-14'>
      <p>Copyright © {year} - All right reserved | made with  by Abdullah Al Omar</p>
    </div>     
    </div>
    
</footer>
        
    );
};

export default Footer;