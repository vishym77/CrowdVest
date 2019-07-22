import React from 'react'
import { Link } from 'react-router-dom'

const MemberList = (temp) => {
    
    console.log(temp.temp.profiles);
    return(
      <div className= "profile-list section" >
        <h5>Members: </h5>
        { temp.temp.project.memberList.map( member => {
            return(
                <div class="card-panel hoverable"> {member} </div>
            )
        })}
      </div>
    )
  }

export default MemberList