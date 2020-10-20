import React, { Fragment } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Footer from './components/footer/Footer';

const App = () => {
  	return (
    	<Fragment>
	  		<Navbar />
			<Home />
			<Footer />
    	</Fragment>
  	);
}

export default App;
