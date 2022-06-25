import React from 'react';

const Service = ({service}) => {
    const { name, picture, about } = service;

    return (
        <div class="card bg-base-100 shadow-xl" data-aos="flip-left" data-aos-duration="1000">
            <figure class="px-10 pt-10">
              <img src={picture} alt="" class="rounded-xl" width={50}/>
            </figure>
            <div class="card-body items-center text-center">
            <h2 class="card-title">{ name }</h2>
            <p>{ about }</p>
          </div>
        </div>
    );
};

export default Service;

