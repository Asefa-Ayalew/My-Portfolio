import React, { FunctionComponent } from 'react'
import { Category } from '../type'

const NavItem:FunctionComponent<{value:Category | "all", handlerFilterCategory:Function}>= ({value}) => {
    return (
         <li className='cursor-pointer hover:text-green capitalize' onClick={()=>handlerFilterCategory({value})}>{value}</li>
        )
  }

const ProjectsNavbar = (props) => {
  return (
    <div className='px-3 py-2 flex list-none space-x-3 overflow-x-auto'>
    <NavItem value='all' {...props}/>
    <NavItem value='react' {...props}/>
    <NavItem value='mongo' {...props}/>
    <NavItem value='django' {...props}/>
    <NavItem value='node' {...props}/>
    </div>
  )
}

export default ProjectsNavbar




