import React from 'react'
import './Navbar.css'
import navlogo from '../assets/admin/nav-logo.svg'
import navProfile from '../assets/admin/nav-profile.svg'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={navlogo} alt='' className='nav-logo' />
        <img src={navProfile} className='nav-profile' alt='' />
    </div>
  )
}

export default Navbar