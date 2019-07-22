import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  console.log(props)
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Group</NavLink></li>
        {/* <li><NavLink to='/createprof'>Profile</NavLink></li> */}
        <li><a onClick={props.signOut}>Log Out</a></li>
        {/* <li><NavLink to= {'/profile/' + props.profile.id} key={props.profile.id} className="btn btn-floating pink lighten-1">
          {props.profile.initials}  
        </NavLink></li> */}
        <li><Link to= {'/'} className="btn btn-floating pink lighten-1">
          {props.profile.initials}  
        </Link></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)