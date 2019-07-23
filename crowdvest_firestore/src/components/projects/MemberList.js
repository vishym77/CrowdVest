import React from 'react'
import { Link } from 'react-router-dom'

const MemberList = ({project}) => {
    console.log(project)
    return(
      <div className= "profile-list section" >
        <h5>Members: </h5>
        { project.memberList.map( member => {
            return(
                <div class="card-panel hoverable"> {member} </div>
            )
        })}
      </div>
    )
  }

export default MemberList