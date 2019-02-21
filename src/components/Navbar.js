import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">Movie Voting App</Link>
        <ul className="right">
          <li><NavLink exact to="/vote">Vote</NavLink></li>
          <li><NavLink to='/search'>Add a movie</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default Navbar