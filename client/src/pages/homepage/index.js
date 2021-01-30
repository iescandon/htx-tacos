import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../utils/API';

function Home() {
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		getRestaurants();
	}, []);

	const getRestaurants = () => {
		API.search()
			.then((res) => {
				console.log('in get restaurant function');
				console.log(res.data);
				setRestaurants(res.data[0]);
				// if (selectedTrail.trails.length > 0) {
				// 	const trail = res.data.filter(
				// 		(trail) => selectedTrail._id === trail._id
				// 	);
				// 	setSelectedTrail(trail[0]);
				// }
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="container mt-4">
			<div>{restaurants.name}</div>
			<div>{restaurants.address}</div>
			<div>{restaurants.phoneNumber}</div>
		</div>
	);
}

export default Home;
