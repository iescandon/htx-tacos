import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../utils/API';

function Home() {
	const [message, setMessage] = useState([]);

	useEffect(() => {
		getMessage();
	}, []);

	const getMessage = () => {
		API.search()
			.then((res) => {
				console.log('in get message function');
				console.log(res.data[0]);
				setMessage(res.data[0]);
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
		<div>
			<div>{message.name}</div>
			<div>{message.email}</div>
			<div>{message.message}</div>
		</div>
	);
}

export default Home;
