import { Button } from '@mantine/core';
import Image from 'next/image';
import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from '../type'

const ProjectCard:FunctionComponent<{
    project:IProject;
}> = ({
    project:{
        name,image_path,category,deployed_url,description,github_url,key_techs,
    },
}) => {
    const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
    <Image src={image_path} alt={name} className='cursor-pointer' width="500" height={500} onClick={()=>setShowDetail(true)} />
    <p className='my-2 text-center'>{name}</p> 
    {
        showDetail && ( 
    <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black 
    bg-gray-100 dark:bg-dark-100 dark:text-white">
        <div>
        <Image src={image_path} alt={name} width="500" height={500}/>
        <div>
        <a href={github_url}>
            <AiFillGithub /><span>Github</span>
        </a>
        <a href={deployed_url}>
            <AiFillProject /><span>Project</span>
        </a>
        </div>  
        </div>
        <div>
                <h2>{name}</h2>
                <h3>{description}</h3>
                <div>
                    {
                        key_techs.map(tech=><span key={tech}>{tech}</span>)
                    }
                </div>
            </div>
            <Button onClick={()=>setShowDetail(false)}><MdClose size={30}
            className="absolute top-"
            /></Button>
    </div>
        )} 
   </div>
  )
}

export default ProjectCard