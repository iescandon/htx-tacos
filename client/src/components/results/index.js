import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card';
import './style.css';

function Results({ restaurants }) {
	// restaurants.forEach((res)=>{
	// const [`${res}`] = React.useRef();
	// })

	return (
		<div className="col">
			{restaurants.map((restaurant) => {
				return (
					<Link
						// ref={restaurant._id}
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
