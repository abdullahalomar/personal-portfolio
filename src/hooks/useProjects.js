import { useEffect, useState } from 'react';

const useProjects = (count= 0) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      if (count) {
        fetch('projects.json')
        .then(response => response.json())
            .then(json => setProjects(json.slice(0,count)))
        }
      else {
        fetch('projects.json')
        .then(response => response.json())
            .then(json => setProjects(json.slice()))
        }
        
    }, [])

    return [projects, setProjects];
    
};

export default useProjects;