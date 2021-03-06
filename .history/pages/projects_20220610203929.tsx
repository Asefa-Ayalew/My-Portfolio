/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import { projects as projectsData } from '../data'
import ProjectCard from '../layouts/project-card'
import ProjectsNavbar from '../layouts/projects-navbar'
import { Category } from '../type'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active,setActive] = useState("all");
   
  const handerFilterCategory = (category: Category | 'all') =>{
 if (category==='all'){
   setProjects(projectsData);
   setActive(category);
   return;
 }
 projectsData.filter((project))
  }
  return (
    <div className='px-5 py-2 overflow-y-scroll' style={{height:'65vh'}}>
      <nav><ProjectsNavbar /></nav>
      <div className='grid grid-cols-12 gap-4 my-3 relative'>
        {
          projects.map(project=>(
            <div className='col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg'>
              <ProjectCard project={project} key={project.name} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects