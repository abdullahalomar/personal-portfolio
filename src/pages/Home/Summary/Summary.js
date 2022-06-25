import React from 'react';

const Summary = () => {
    return (
        <div className='mt-16 mx-20'>
        
    <div class="stats stats-vertical lg:stats-horizontal shadow-2xl">
  
    <div class="stat gap-5 px-10">
    <div class="stat-figure text-secondary">
    <img src="https://img.icons8.com/external-others-pike-picture/344/external-experience-values-others-pike-picture.png" alt="" width={45}/>
    </div>
    <div class="stat-value text-secondary">2+</div>
    <div class="stat-title">Years of Experience</div>
  </div>
  
    <div class="stat px-12">
    <div class="stat-figure text-secondary">
      <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-project-web-development-flaticons-lineal-color-flat-icons-3.png" alt="" width={45}/>
    </div>
    <div class="stat-value text-secondary">15+</div>
    <div class="stat-title">Completed Projects</div>
  </div>
  
  <div class="stat px-12">
  <div class="stat-figure text-secondary">
  <img src="https://img.icons8.com/external-others-pike-picture/344/external-Client-introduction-others-pike-picture.png" alt="" width={45}/>
    </div>
    <div class="stat-value text-secondary">5+</div>
    <div class="stat-title">Happy Clients</div>
  </div>
          
  <div class="stat px-14">
  <div class="stat-figure text-secondary">
  <img src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/128/external-hour-business-planning-inipagistudio-lineal-color-inipagistudio.png" alt="" width={45}/>
    </div>
    <div class="stat-value text-secondary">600+</div>
    <div class="stat-title">Hours of Work</div>
  </div>
          
        </div>

       </div>
    );
};

export default Summary;