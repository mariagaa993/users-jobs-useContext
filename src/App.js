import React, { Fragment } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  	return (
    	<Fragment>
	  		<Navbar />	  
			<Footer />
    	</Fragment>
  	);
}

export default App;
