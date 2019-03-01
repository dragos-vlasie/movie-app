import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/index.js'

import { NavLink } from 'react-router-dom'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
          <li><NavLink exact to="/vote">Vote</NavLink></li>
          <li><NavLink to='/search'>Add a movie</NavLink></li>
          <li><a href="/" onClick={props.signOut}>Log Out</a></li>
        </ul>
    </div>
  )
}

export default connect(null, actionCreators )(SignedInLinks)