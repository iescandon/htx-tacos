import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Navbar from './components/navbar';
import InfoPage from './pages/infopage';

function App() {
	return (
		<div>
			<Navbar />
			<Router>
				<div>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/home" component={HomePage} />
					<Route path="/restaurant" component={InfoPage} />
				</div>
			</Router>
		</div>
	);
}

export default App;
