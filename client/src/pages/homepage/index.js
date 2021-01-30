import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../utils/API';
import Results from '../../components/results';
import Map from '../../components/map';

function Home() {
	const [restaurants, setRestaurants] = useState([]);
	const [centerPoint, setCenterPoint] = useState({
		lat: 29.749907,
		lng: -95.358421,
	});

	useEffect(() => {
		getRestaurants();
	}, []);

	const mapRef = React.useRef();
	const onMapLoad = React.useCallback((map) => {
		mapRef.current = map;
	}, []);

	const getRestaurants = () => {
		API.search()
			.then((res) => {
				setRestaurants(res.data);
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
		<div className="">
			<div className="row">
				<div className="col-8 pr-0">
					<Results restaurants={restaurants} />
				</div>
				<div className="col-4 pl-0">
					<Map centerPoint={centerPoint} onMapLoad={onMapLoad} />
				</div>
			</div>
		</div>
	);
}

export default Home;
