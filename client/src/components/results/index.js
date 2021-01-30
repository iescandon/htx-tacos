import React, { useState, useEffect } from 'react';
import './style.css';

function Results({ restaurants }) {
	return (
		<div className="container mt-4">
			<div>{restaurants.name}</div>
			<div>{restaurants.address}</div>
			<div>{restaurants.phoneNumber}</div>
		</div>
	);
}

export default Results;
