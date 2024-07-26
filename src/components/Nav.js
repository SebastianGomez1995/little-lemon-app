import React from 'react';
import "./Nav.css"

const Nav = () => {
  return (
    <nav className='navBar'>
        <ul className='nav-list'>
            <li className='nav-item'><a href="/#Home">Home</a></li>
            <li className='nav-item'><a href='/#About'>About</a></li>
            <li className='nav-item'><a href='/#Menu'>Menu</a></li>
            <li className='nav-item'><a href='/#Reservations'>Reservations</a></li>
            <li className='nav-item'><a href='/#Orden Online'>Orden Online</a></li>
            <li className='nav-item'><a href='/#Login'>Login</a></li>
        </ul>
    </nav>
  );
};

export default Nav;