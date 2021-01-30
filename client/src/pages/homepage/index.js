import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../utils/API';
import Results from '../../components/results';
import Map from '../../components/map';
import Filter from '../../components/filter';

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
				<div className="col-7 pr-0">
					<Filter />
					<Results restaurants={restaurants} />
				</div>
				<div className="col-5 pl-0" id="map_canvas">
					<Map centerPoint={centerPoint} onMapLoad={onMapLoad} />
				</div>
			</div>
		</div>
	);
}

export default Home;
