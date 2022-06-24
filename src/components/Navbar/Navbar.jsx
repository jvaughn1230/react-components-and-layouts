import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

const Nav = () => {
    return(
        <nav className='darkBG nav'>
            <Link to='/' className='title'>Site Name</Link>
            <ul>
                <li>
                    <Link to='/grid1'>Grid 1</Link>
                </li>
                <li>
                    <Link to='/grid2'>Grid 2</Link>
                </li>
                <li>
                    <Link to='/grid3'>Grid 3</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
