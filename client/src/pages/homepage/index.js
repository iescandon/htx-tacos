import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import { getDistance, isPointWithinRadius } from 'geolib';
import './style.css';
import API from '../../utils/API';
import Results from '../../components/results';
import Map from '../../components/map';
import Filter from '../../components/filter';
import Search from '../../components/search';

function Home() {
	const [restaurants, setRestaurants] = useState([]);
	const [centerPoint, setCenterPoint] = useState({
		lat: 29.749907,
		lng: -95.358421,
	});
	const [userLocation, setUserLocation] = useState({});
	const [search, setSearch] = useState('');

	useEffect(() => {
		getRestaurants();
		getUserLocation();
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

	const getUserLocation = () => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setCenterPoint({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
				setUserLocation({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			},
			() => null
		);
	};

	const handleInputChange = ({ target }) => {
		const { value } = target;
		setSearch(value);
	};

	const getLatAndLong = (search, event) => {
		event.preventDefault();
		Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
		Geocode.fromAddress(search).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				setCenterPoint({
					lat,
					lng,
				});
			},
			(error) => {
				console.error(error);
			}
		);
		setSearch('');
	};

	restaurants.map((restaurant) => {
		Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
		Geocode.fromAddress(restaurant.address).then(
			(response) => {
				const { lat, lng } = response.results[0].geometry.location;
				restaurant.location = {
					lat,
					lng,
				};
				restaurant.distance = (
					getDistance(
						{
							latitude: restaurant.location.lat,
							longitude: restaurant.location.lng,
						},
						{
							latitude: centerPoint.lat,
							longitude: centerPoint.lng,
						}
					) * 0.000621371192
				).toFixed(2);
			},
			(error) => {
				console.error(error);
			}
		);
	});

	return (
		<div className="">
			<div className="row">
				<div className="col-7 pr-0">
					<div className="row">
						<div className="col">
							<Filter />
						</div>
						<div className="col my-auto">
							<Search
								search={search}
								handleInputChange={handleInputChange}
								getLatAndLong={getLatAndLong}
							/>
						</div>
					</div>
					<div className="row">
						<Results restaurants={restaurants} />
					</div>
				</div>
				<div className="col-5 pl-0" id="map_canvas">
					<Map
						restaurants={restaurants}
						centerPoint={centerPoint}
						onMapLoad={onMapLoad}
						userLocation={userLocation}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
