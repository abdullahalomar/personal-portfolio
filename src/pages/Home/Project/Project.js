import React from 'react';

const Project = ({ project }) => {
    
    const { picture, title, site_link } = project;

    return (
        <div>
             <div class="card card-compact w-80 bg-base-100 shadow-xl">
                 <figure><img src={picture} alt="" /></figure>
                 <div class="card-body">
                    <p className='font-bold'>{title}</p>
                 <div class="card-actions justify-end">
                 <a href={site_link} class="btn btn-primary">Preview</a>
               </div>
             </div>
           </div>
        </div>
    );
};

export default Project;