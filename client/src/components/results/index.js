import React from 'react';
import { Link } from 'react-router-dom';
// import { Card } from 'react-bootstrap';
import Card from '../card';
import './style.css';
// import pic from '../../assets/torchys.jpg';

function Results({ restaurants }) {
	console.log(restaurants);
	return (
		<div className="">
			{restaurants.map((restaurant) => {
				console.log(restaurant.name);
				return (
					<Link key={restaurant._id} to={`/restaurant/${restaurant.name}`}>
						<Card restaurant={restaurant} />
					</Link>
					// <Card key={restaurant._id} className="bg-dark text-white">
					// 	<Card.Img src={pic} alt="Card image" />
					// 	<Card.ImgOverlay>
					// 		<Card.Title>{restaurant.name}</Card.Title>
					// 		{/* <Card.Text>
					// 	This is a wider card with supporting text below as a natural lead-in
					// 	to additional content. This content is a little bit longer.
					// </Card.Text>
					// <Card.Text>Last updated 3 mins ago</Card.Text> */}
					// 	</Card.ImgOverlay>
					// </Card>
				);
			})}
		</div>
	);
}

export default Results;
