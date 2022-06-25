import React from 'react';
import { useEffect } from 'react';
import useProjects from '../../../hooks/useProjects';
import Project from '../Project/Project';

const AllProjects = () => {
    const [projects, setProjects] = useProjects();
    useEffect(() => {
        const url = 'projects.json'
        fetch(url)
            .then(response => response.json())
        .then(json => setProjects(json))
    },[])
    return (
        <div className='mt-10'>
        <div className=''>
          <h2 className='text-3xl font-semibold text-secondary'>My Projects</h2>
            <div className='bg-secondary w-40 h-0.5 pl-15' data-aos="fade-right" data-aos-duration="3000"></div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mt-10 pl-7'>
          {
            projects.map(project => <Project
              key={project._id}
              project={project}
            ></Project>)
          }
            </div>
        </div>
    );
};

export default AllProjects;