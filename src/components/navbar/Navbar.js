import React from 'react';
import './Navbar.scss';
import Home from '../pages/Home';
import JobPage from '../pages/JobPage';
import UserPage from '../pages/UserPage';
import iconNav from './icon-nav.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Router>
          	<nav className="nav">
          		<ul>
				  	<li><img className="icon-nav" src={iconNav} /></li>
            		<li><Link className="link" to="/">Home</Link></li>
            		<li><Link className="link" to="/users">Users</Link></li>
					<li><Link className="link" to="/jobs">Jobs</Link></li>
          		</ul>
        	</nav>
        
      		<Switch>
      			<Route path="/" exact component={Home}></Route>
				<Route path="/users" component={UserPage}></Route>
          		<Route path="/jobs" component={JobPage}></Route>
        	</Switch>
        </Router>
    );
}

export default Navbar;
