import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card';
import './style.css';

function Results({ restaurants }) {
	return (
		<div className="col addMargin">
			{restaurants.map((restaurant) => {
				return (
					<Link
						id={restaurant._id}
						key={restaurant._id}
						to={`/${restaurant._id}`}
					>
						<Card restaurant={restaurant} />
					</Link>
				);
			})}
		</div>
	);
}

export default Results;
