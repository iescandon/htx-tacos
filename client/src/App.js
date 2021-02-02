import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Navbar from './components/navbar';
import InfoPage from './pages/infopage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from './utils/API';
// import Geocode from 'react-geocode';
// import { getDistance } from 'geolib';

function App() {
	// const [centerPoint, setCenterPoint] = useState({
	// 	lat: 29.749907,
	// 	lng: -95.358421,
	// });
	// let [restaurants, setRestaurants] = useState([], function () {
	// 	console.log('in call back');
	// 	addInfo();
	// });
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

	// const addInfo = () => {
	// 	console.log('in add info');
	// 	console.log(restaurants);
	// 	restaurants.map((restaurant) => {
	// 		Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
	// 		Geocode.fromAddress(restaurant.address).then(
	// 			(response) => {
	// 				const { lat, lng } = response.results[0].geometry.location;
	// 				restaurant.location = {
	// 					lat,
	// 					lng,
	// 				};
	// 				restaurant.distance = (
	// 					getDistance(
	// 						{
	// 							latitude: restaurant.location.lat,
	// 							longitude: restaurant.location.lng,
	// 						},
	// 						{
	// 							latitude: centerPoint.lat,
	// 							longitude: centerPoint.lng,
	// 						}
	// 					) * 0.000621371192
	// 				).toFixed(2);
	// 			},
	// 			(error) => {
	// 				console.error(error);
	// 			}
	// 		);
	// 	});
	// };

	const addRating = (id, rating) => {
		API.add(id, rating)
			.then((res) => {
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
								// centerPoint={centerPoint}
								// setCenterPoint={setCenterPoint}
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
