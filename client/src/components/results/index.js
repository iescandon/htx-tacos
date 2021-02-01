import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card';
import './style.css';

function Results({ restaurants }) {
	// restaurants.forEach((res)=>{
	// const [`${res}`] = React.useRef();
	// })

	// const [sorted, setSorted] = useState([]);

	// useEffect(() => {
	// 	sortedRestaurants();
	// }, []);

	// const sortedRestaurants = () => {
	// 	const sortedRestaurants = [...restaurants];
	// 	sortedRestaurants.sort(function (a, b) {
	// 		return a.distance - b.distance;
	// 	});
	// 	setSorted(sortedRestaurants);
	// };

	// restaurants.sort(function (a, b) {
	// 	return a.distance - b.distance;
	// });

	return (
		<div className="col">
			{restaurants.map((restaurant) => {
				return (
					<Link
						id={restaurant._id}
						key={restaurant._id}
						to={`/restaurant/${restaurant.name}`}
					>
						<Card restaurant={restaurant} />
					</Link>
				);
			})}
		</div>
	);
}

export default Results;
