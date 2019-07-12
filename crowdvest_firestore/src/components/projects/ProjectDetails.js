import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

//Video 7 creates ProjectDetails page
// The Posted by Group owner box doesn't match, and this is a bug
//This is probably a materialize issue
//Highly possible that we can just delete this as it isn't needed
//Group Name should probably be in bold

const ProjectDetails = (props) => {

  //This pulls the Project Id from the url
  //Later on it should tell us which group's details we are looking at
  const { project } = props;
  if (project) {
    return(
      <div className='container section project-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className= "card-title">{ project.title }</span>
            <p>{ project.content }</p>
          </div>
          <div className="card action grey lighten-3 grey-text">
            <div> Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div> more information about group is here </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container center">
        <p>Loading Group...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state)
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project

  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
