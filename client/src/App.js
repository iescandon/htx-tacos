import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage';

function App() {
	return (
		<Router>
			<div>
				<Route exact path="/" component={HomePage} />
				{/* <Route exact path="/home" component={HomePage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/help" component={HelpPage} />
				<Route exact path="/contact" component={ContactPage} /> */}
			</div>
		</Router>
	);
}

export default App;
