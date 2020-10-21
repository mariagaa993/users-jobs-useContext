import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import UserPage from './components/pages/UserPage';
import JobPage from './components/pages/JobPage';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  	return (
		<Router>
        	<div>
          		<Navbar /> 
          		<Switch>
            		<Route exact path="/users-jobs-useContext" component={Home} />
            		<Route path="/users" component={UserPage} />
            		<Route path="/jobs" component={JobPage} />
          		</Switch>
          		<Footer />
        	</div>
      	</Router>
  	);
}

export default App;

/* 
	<Fragment>
	  		<Navbar />
			<ContentInit />
			<Footer />
    	</Fragment>
*/
