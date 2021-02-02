import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './style.css';

function Filter({ sortDistance, sortRating, sortName }) {
	const [distanceOrder, setDistanceOrder] = useState(true);
	const [ratingOrder, setRatingOrder] = useState(true);
	const [nameOrder, setNameOrder] = useState(true);

	return (
		<div className="m-3">
			<div className="row justify-content-center">Filter by:</div>
			<div className="row justify-content-center">
				<ButtonGroup className="filterBtns" aria-label="Basic example">
					<Button
						variant="light"
						onClick={() => {
							sortName(nameOrder);
							const newOrder = !nameOrder;
							setNameOrder(newOrder);
						}}
					>
						Name
					</Button>
					<Button
						variant="light"
						onClick={() => {
							sortDistance(distanceOrder);
							const newOrder = !distanceOrder;
							setDistanceOrder(newOrder);
						}}
					>
						Distance
					</Button>
					<Button
						variant="light"
						onClick={() => {
							sortRating(ratingOrder);
							const newOrder = !ratingOrder;
							setRatingOrder(newOrder);
						}}
					>
						Rating
					</Button>
				</ButtonGroup>
			</div>
		</div>
	);
}

export default Filter;
