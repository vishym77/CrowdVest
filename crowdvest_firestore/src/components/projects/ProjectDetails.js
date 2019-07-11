import React from 'react'

//Video 7 creates ProjectDetails page
// The Posted by Group owner box doesn't match, and this is a bug
//This is probably a materialize issue
//Highly possible that we can just delete this as it isn't needed
//Group Name should probably be in bold

const ProjectDetails = (props) => {

  //This pulls the Project Id from the url
  //Later on it should tell us which group's details we are looking at
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className= "card-title">Group Name -{id}</span>
          <p> This is where group information will eventually be stored</p>
        </div>
        <div className="card action grey lighten-3 grey-text">
          <div> Posted by Group Creator/GroupOwner </div>
          <div> more information about group is here </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
