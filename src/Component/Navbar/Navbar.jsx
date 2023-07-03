
import React from 'react'
import './Navbar.css'
import Logo from './Logo/Logo'
import Links from './Links/Links'
import Login from './Login/Login'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Logo/>
      <Links/>
      <Login/>
    </nav>
  )
}
