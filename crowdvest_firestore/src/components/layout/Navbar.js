import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar = () => {
  return(
    //this generates a wrapper for the navigation and makes it look better
    //We will add functionality later to
    //only display SignedInLinks to users who are signed in
    //This will also only display SignedOutLinks to users not
    //signed in.
    
    <nav className = "nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Crowd-Vest</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )

}


export default Navbar
