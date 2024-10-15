import React from 'react'
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <nav>  
        
        <a href="/"> <img src= {logo}  alt="KRYPTONITE" className='logo'/> </a>
        <ul>
            <li className='links'> <a href="/drops"> Drops </a> </li>
            <li className='links'> <a href="/stats"> Stats </a> </li>
            <li className='links'> <a href="/create"> Create </a> </li>
            <li className='links'> <a href="/learn"> Learn </a> </li>
            <li className='links'> <a href="/about"> About Us </a> </li>
            <li className='links'> <a href="/support"> Support </a> </li>
      </ul>
    </nav>
  )
}

export default Navbar
