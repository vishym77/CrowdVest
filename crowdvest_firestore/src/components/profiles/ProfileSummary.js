// This is a function that defines a ProjectList in a modular way

import React from 'react'
import moment from 'moment'


const ProfileSummary = ({profile}) => {
  return (
    <div className= "card z-depth-0 project-summary">
      <div className= "card-content grey-text text-darken-3">
        <span className= "card-title">{profile.userName}</span>
      </div>
    </div>
  )
}

export default ProfileSummary
