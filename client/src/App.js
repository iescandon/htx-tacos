import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Navbar from './components/navbar';
import InfoPage from './pages/infopage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from './utils/API';

function App() {
	let [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		getRestaurants();
	}, []);

	const getRestaurants = () => {
		API.search()
			.then((res) => {
				setRestaurants(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const addRating = (id, rating) => {
		console.log('in app.js');
		console.log(rating);
		API.add(id, rating)
			.then((res) => {
				console.log('success');
				console.log(res.data);
				getRestaurants();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<Navbar />
			<Router>
				<div>
					<Route
						exact
						path="/"
						render={() => (
							<HomePage
								restaurants={restaurants}
								setRestaurants={setRestaurants}
							/>
						)}
					/>
					<Route
						exact
						path="/home"
						render={() => (
							<HomePage
								restaurants={restaurants}
								setRestaurants={setRestaurants}
							/>
						)}
					/>
					<Route
						path="/:restaurantID"
						render={() => (
							<InfoPage restaurants={restaurants} addRating={addRating} />
						)}
					/>
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
