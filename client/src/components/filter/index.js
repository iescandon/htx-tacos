import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import './style.css';

function Filter({ sortDistance, sortRating, sortName }) {
	return (
		<div className="m-4">
			Filter by:{'  '}
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
	);
}

export default Filter;
