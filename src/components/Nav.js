import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Nav = ({ orientation }) => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className={`nav ${orientation}`}>
      <ul className='nav-list'>
        <li className='nav-item'><a href='/#Home' onClick={handleClick('home')}>Home</a></li>
        <li className='nav-item'><a href='/#About' onClick={handleClick('about')}>About</a></li>
        <li className='nav-item'><a href='/#Menu'>Menu</a></li>
        <li className='nav-item'><a href='/#Reservations'>Reservations</a></li>
        <li className='nav-item'><a href='/#OrdenOnline'>Orden Online</a></li>
        <li className='nav-item'><a href='/#Login' >Login</a></li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
};

export default Nav;
