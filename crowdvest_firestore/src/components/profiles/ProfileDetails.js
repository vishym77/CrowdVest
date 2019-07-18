import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

//Video 7 creates ProjectDetails page
// The Posted by Group owner box doesn't match, and this is a bug
//This is probably a materialize issue
//Highly possible that we can just delete this as it isn't needed
//Group Name should probably be in bold

const ProfileDetails = (props) => {

  //This pulls the Project Id from the url
  //Later on it should tell us which group's details we are looking at
  const { profile, auth } = props;
  if(!auth.uid) return <Redirect to = '/signin' />
  //console.log(profile)
  if (profile) {
    return(
      <div className='container section profile-details'>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <p>{ profile.authorFirstName }</p>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container center">
        <p>Loading Profile...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(id)
  const profiles = state.firestore.data.profiles;
  const profile = profiles ? profiles[id] : null

  return {
    profile: profile,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'profiles' }
  ])
)(ProfileDetails)
