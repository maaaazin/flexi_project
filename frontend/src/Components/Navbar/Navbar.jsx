import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav>  
        <Link to="/"> <img src={logo} alt="KRYPTONITE" className='logo' /> </Link>
        <ul>
            <li className='links'> <Link to="/drops"> Drops </Link> </li>
            <li className='links'> <Link to="/stats"> Stats </Link> </li>
            <li className='links'> <Link to="/create"> Create </Link> </li>
            <li className='links'> <Link to="/learn"> Learn </Link> </li>
            <li className='links'> <Link to="/about"> About Us </Link> </li>
            <li className='links'> <Link to="/support"> Support </Link> </li>
        </ul>
    </nav>
  );
}

export default Navbar;
