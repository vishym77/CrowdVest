import React from 'react'
import ProjectSummary from './ProjectSummary'

// These hold Project Summary's defined under
//'Project Summary'


const ProjectList = ({projects}) => {
  return(
    <div className= "project-list section">
      { projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}
    </div>
  )
}

export default ProjectList
