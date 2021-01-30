import React, { useState, useEffect } from 'react';
import './style.css';

function Results({ restaurants }) {
	return (
		<div className="mt-4 row">
			<div className="col-6">
				<img src={`${restaurants.image}`} alt={`${restaurants.name} image`} />
			</div>
			<div className="col-6">
				<div>{restaurants.name}</div>
				<div>{restaurants.address}</div>
				<div>{restaurants.phoneNumber}</div>
			</div>
		</div>
	);
}

export default Results;
