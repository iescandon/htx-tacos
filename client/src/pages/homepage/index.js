import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import { getDistance } from 'geolib';
import './style.css';
import Results from '../../components/results';
import Map from '../../components/map';
import Filter from '../../components/filter';
import Search from '../../components/search';

function Home({ restaurants, setRestaurants }) {
	const [centerPoint, setCenterPoint] = useState({
		lat: 29.749907,
		lng: -95.358421,
	});
	const [userLocation, setUserLocation] = useState({
		lat: 29.749907,
		lng: -95.358421,
	});
	const [search, setSearch] = useState('');
	const spinnerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	useEffect(() => {
		getUserLocation();
	}, []);

	useEffect(() => {
		getDistDifference();
	}, [centerPoint.lat]);

	const mapRef = React.useRef();
	const onMapLoad = React.useCallback((map) => {
		mapRef.current = map;
	}, []);

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

	const resetCenterPoint = () => {
		setCenterPoint({
			lat: userLocation.lat,
			lng: userLocation.lng,
		});
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

	const getDistDifference = () => {
		const newrestaurants = [...restaurants];
		newrestaurants.map((restaurant) => {
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
		});
		newrestaurants.sort(function (a, b) {
			return a.distance - b.distance;
		});
		setRestaurants(newrestaurants);
	};

	let sortDistance = (order) => {
		const newrestaurants = [...restaurants];
		if (order) {
			newrestaurants.sort(function (a, b) {
				return a.distance - b.distance;
			});
		} else {
			newrestaurants
				.sort(function (a, b) {
					return a.distance - b.distance;
				})
				.reverse();
		}
		setRestaurants(newrestaurants);
	};

	let sortName = (order) => {
		const newrestaurants = [...restaurants];
		if (order) {
			newrestaurants.sort(function (a, b) {
				return a.name.localeCompare(b.name);
			});
		} else {
			newrestaurants
				.sort(function (a, b) {
					return a.name.localeCompare(b.name);
				})
				.reverse();
		}
		setRestaurants(newrestaurants);
	};

	let sortRating = (order) => {
		const newrestaurants = [...restaurants];
		if (order) {
			newrestaurants
				.sort(function (a, b) {
					return a.ratingAvg - b.ratingAvg;
				})
				.reverse();
		} else {
			newrestaurants.sort(function (a, b) {
				return a.ratingAvg - b.ratingAvg;
			});
		}
		setRestaurants(newrestaurants);
	};

	const scrollToDiv = (id) => {
		const div = document.getElementById(id);
		div.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="">
			{restaurants && restaurants[0] && restaurants[0].distance ? (
				<div className="row">
					<div className="col-lg-7 col-md-6 col-sm-12 pr-0">
						<div className="row">
							<div className="col-lg-6 col-md-4 col-sm-3 filterDiv">
								<Filter
									sortDistance={sortDistance}
									sortName={sortName}
									sortRating={sortRating}
								/>
							</div>
							<div className="col-lg-6 col-md-8 col-sm-9 my-auto searchDiv">
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
					<div className="col-lg-5 col-md-6 col-sm-12 pl-0 map_canvas hideWhenMobile">
						<Map
							restaurants={restaurants}
							centerPoint={centerPoint}
							onMapLoad={onMapLoad}
							resetCenterPoint={resetCenterPoint}
							scrollToDiv={scrollToDiv}
						/>
					</div>
				</div>
			) : (
				<div className="sk-circle">
					{spinnerArray.map((num) => {
						return <div key={num} className={`sk-circle${num} sk-child`}></div>;
					})}
				</div>
			)}
		</div>
	);
}

export default Home;
