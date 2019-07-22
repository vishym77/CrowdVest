import React from 'react'
import ProfileSummary from './ProfileSummary'
import { Link } from 'react-router-dom'

// These hold Project Summary's defined under
//'Project Summary'


const ProfileList = ({profiles}) => {
  console.log(profiles)
  return(
    <div className= "profile-list section">
      { profiles && profiles.map(profile => {
        return (
          <Link to = {'/profile/' + profile.id}  key={profile.id}>
          <ProfileSummary profile={profile}/>
          </Link>
        )
      })}
    </div>
  )
}

export default ProfileList
