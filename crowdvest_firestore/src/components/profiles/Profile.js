import React, { Component } from 'react'
import Notifications from '../dashboard/Notifications'
import ProjectList from '../projects/ProjectList'
import ProfileList from './ProfileList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'

const Profile = (props) => {

    const { profile, profiles, projects, auth, notifications } = props;
    if(!auth.uid) return <Redirect to='/signin' />

    console.log(profile)

    if (profile) {
      return(
      <div className= "card z-depth-0 project-summary">
        <div className= "card-content grey-text text-darken-3">
          <span className= "card-title">User: {profile.userName}</span>
            <p>First Name: {profile.firstName}</p>
            <p>Last Name: {profile.lastName}</p>
        </div>
      </div>
      )
    }
    else {
      return (
        <div className="container center">
          <p>Loading User...</p>
        </div>
      )
    }
  }

// class Profile extends Component{
//   render(){

//     //console.log(this.props);

//     const { profile, profiles, projects, auth, notifications } = this.props;
//     if(!auth.uid) return <Redirect to='/signin' />

//     console.log(profiles)

//     //col s12 m6 means a small screen holds 12 and
//     //medium and up hold 6

//     return(
//       <div className= "profile container">
//         <div className= "row">
//           <div className= "col s12 m6">
//               <h1>{profile.userName}</h1>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    console.log(id)
    const profiles = state.firestore.data.profiles;
    const profile = profiles ? profiles[id] : null

  return {
    profile: profile,
    profiles: state.firestore.ordered.profiles,
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // { collection: 'users', orderBy: ['userName']}
    { collection: 'profiles'},
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Profile)