import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import JoinGroup from './JoinGroup'
import { joinGroup } from '../../store/actions/groupActions';
import { interfaceDeclaration } from '@babel/types';

// joinGroup may not have to be imported

const ProjectDetails = (props) => {

  //This pulls the Project Id from the url
  //Later on it should tell us which group's details we are looking at
  const { project, auth } = props;
  if(!auth.uid) return <Redirect to = '/signin' />
  if (project) {
    return(
      <div className='container section project-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <span className= "card-title">{ project.title }</span>
            <p>Investment Philosophy: <br></br>  { project.content }</p>

            <br></br>

            <p>Annualized Group Return Since Inception:  { project.group_return }</p>

            <br></br>

            <p>Annualized SP500 Return Since Inception:  { project.sp500_return }</p>

            <br></br>

            <p>Fund Beta Since Inception:  { project.fund_beta }</p>


      
          </div>
          <div className="card action grey lighten-3 grey-text">
            <div> Contact Group Portfolio Manager at {project.authorEmail} </div>
          </div>
        </div>
        
       <JoinGroup project={project}/>

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
    project: project,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)