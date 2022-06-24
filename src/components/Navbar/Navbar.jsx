import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

const Nav = () => {
    return(
      <nav className='darkBG'>
        <ul className='main-nav'>
            <li className='title'><Link to='/'>React Layouts</Link></li>
            <li className='nav-link'><Link to='/'>Home</Link></li>
            <li className='nav-link'><Link to='/grid1'>Grid 1</Link></li>
            <li className='nav-link'><Link to='/grid2'>Grid 2</Link></li>
            <li className='nav-link'><Link to='/grid3'>Grid 3</Link></li>
            <li className='nav-link'><Link to='/grid4'>Grid 4</Link></li>
            <li className='nav-link'><Link to='/grid5'>Grid 5</Link></li>
            <li className='nav-link'><Link to='/grid6'>Grid 6</Link></li>
            <li className='nav-link'><Link to='/grid7'>Grid 7</Link></li>
            <li className='nav-link'><Link to='/grid8'>Grid 8</Link></li>
            <li className='nav-link'><Link to='/grid9'>Grid 9</Link></li>
        </ul>
      </nav>
    );
}

export default Nav;
