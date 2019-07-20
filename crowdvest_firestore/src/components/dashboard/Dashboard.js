import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import ProfileList from '../profiles/ProfileList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component{
  render(){

    //console.log(this.props);

    const { profiles, projects, auth, notifications } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    console.log(profiles)

    //col s12 m6 means a small screen holds 12 and
    //medium and up hold 6

    return(
      <div className= "dashboard container">
        <div className= "row">
          <div className= "col s12 m6">
            <ProjectList projects={projects}/>
            <ProfileList profiles={profiles}/>
          </div>
          <div className= "col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    profiles: state.firestore.ordered.profiles,
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'profiles', orderBy: ['userName'] },
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)