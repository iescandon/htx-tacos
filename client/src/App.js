import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Navbar from './components/navbar';
import InfoPage from './pages/infopage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	const [state, setState] = useState('hello');
	return (
		<div>
			<Navbar />
			<Router>
				<div>
					<Route exact path="/" render={() => <HomePage state={state} />} />
					<Route exact path="/home" component={HomePage} />
					<Route path="/restaurant" component={InfoPage} />
					<ToastContainer
						position="bottom-left"
						autoClose={2000}
						hideProgressBar={true}
						pauseOnHover={false}
						closeOnClick={true}
					/>
				</div>
			</Router>
		</div>
	);
}

export default App;
