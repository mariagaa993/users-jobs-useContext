import React, { Fragment } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import JobPage from './components/pages/JobPage';
import UserPage from './components/pages/UserPage';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  	return (
		<Router>
			<Navbar />	
			<Switch>
				<Route path="/" exact> <Home /> </Route>
		  		<Route path="/users"> <UserPage /> </Route>
				<Route path="/jobs"> <JobPage /> </Route>
	  		</Switch>
			<Footer />
  		</Router>
  	);
}

export default App;
