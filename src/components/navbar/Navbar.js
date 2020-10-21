import React from 'react';
import './Navbar.scss';
import iconNav from './icon-nav.svg';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const Navbar = () => {
    return (
		<nav className="nav">
			<ul>
				<li><img className="icon-nav" src={iconNav} /></li>
				<li style={{diaply: `translateX(${pixels}px)`}} ><Link className="link" to="/users">Users</Link></li>
				<li><Link className="link" to="/jobs">Jobs</Link></li>
			</ul>
		</nav>
    );
}

export default Navbar;
