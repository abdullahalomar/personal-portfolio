import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';
import Project from './Project/Project';

const Projects = () => {

  const [projects, setProjects] = useProjects(3);
  const navigate = useNavigate();
  const NavigateAllProjects = () => {
    navigate('/all-projects')
  }

    return (
        <div className='mt-10'>
        <div className=' px-5'>
          <h2 className='text-3xl font-semibold text-secondary'>My Projects</h2>
            <div className='bg-secondary w-40 h-0.5' data-aos="fade-right" data-aos-duration="3000"></div>
            </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mt-10 px-5'>
          {
            projects.map(project => <Project
              key={project._id}
              project={project}
            ></Project>)
          }
        </div>
        <button onClick={() =>NavigateAllProjects()} class="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded mt-5 mx-5">
        More Projects
        </button>
        </div>
    );
};

export default Projects;