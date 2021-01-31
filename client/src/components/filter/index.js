import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './style.css';

function Filter({ sortDistance, sortRating, sortName }) {
	// const handleOrder = () => {
	// 	handleSort(order, header.name);
	// 	if (order === 'down') {
	// 		setOrder('up');
	// 		return;
	// 	}
	// 	setOrder('down');

	// 	return;
	// };
	return (
		<div className="m-3">
			<div className="row justify-content-center">Filter by:</div>
			<div className="row justify-content-center">
				<ButtonGroup aria-label="Basic example">
					<Button
						variant="light"
						onClick={() => {
							sortName();
						}}
					>
						Name
					</Button>
					<Button
						variant="light"
						onClick={() => {
							sortDistance();
						}}
					>
						Distance
					</Button>
					<Button
						variant="light"
						onClick={() => {
							sortRating();
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
