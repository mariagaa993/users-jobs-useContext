import React, { Fragment } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import ContentInit from './components/contentInit/ContentInit';
import Footer from './components/footer/Footer';

const App = () => {
  	return (
    	<Fragment>
	  		<Navbar />
			<ContentInit />
			<Footer />
    	</Fragment>
  	);
}

export default App;
