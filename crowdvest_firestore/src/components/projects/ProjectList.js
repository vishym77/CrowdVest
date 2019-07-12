import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

// These hold Project Summary's defined under
//'Project Summary'


const ProjectList = ({projects}) => {
  return(
    <div className= "project-list section">
      { projects && projects.map(project => {
        return (
          <Link to = {'/project/' + project.id}>
          <ProjectSummary project={project} key={project.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList
