import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile = { profile } /> : <SignedOutLinks />
  
  return (
    <nav className="nav-wrapper">
        <Link className="left" to="/">Movie Voting App</Link>
        { links }
    </nav> 
  )
}

const mapStateToProps = (state) => {
  console.log('state:', state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)