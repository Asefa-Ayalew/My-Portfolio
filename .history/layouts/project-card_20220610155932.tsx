import React, { FunctionComponent } from 'react'
import { IProject } from '../type'

const ProjectCard:FunctionComponent<{
    project:IProject;
} = ({
    project:{
        name,image_path,category,deployed_url,description,github_url,key_techs,
    },
}) => {
  return (
    <div></div>
  )
}

export default ProjectCard