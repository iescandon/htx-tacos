import React, { useEffect } from 'react';
import './style.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import UserLocationMarker from '../../assets/userLocation.svg';

const containerStyle = {
	width: '100%',
	height: '100vh',
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
};

function Map({
	restaurants,
	centerPoint,
	onMapLoad,
	userLocation,
	scrollToDiv,
}) {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
	});
	if (loadError) return 'Error';

	if (!isLoaded) {
		return (
			<div className="col-12 my-auto">
				<div className="mt-3 row justify-content-center">
					<p>Loading...</p>
				</div>
			</div>
		);
	}

	if (isLoaded && restaurants && restaurants[0] && restaurants[0].location) {
		return (
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={centerPoint}
				zoom={10}
				onLoad={onMapLoad}
				options={mapOptions}
			>
				{/* {userLocation ? (
					<Marker
						position={{ lat: userLocation.lat, lng: userLocation.lng }}
						// options={{
						// 	icon: require('../../assets/userLocation.svg'),
						// }}
						animation={2}
						// labelAnchor={{ lat: userLocation.lat, lng: userLocation.lng }}
					/>
				) : null} */}
				{restaurants.map((res) => {
					return (
						<div key={`${res.location.lat}-${res.location.lng}`}>
							<Marker
								key={`${res.location.lat}-${res.location.lng}`}
								position={{ lat: res.location.lat, lng: res.location.lng }}
								onClick={() => {
									scrollToDiv(res._id);
									// setSelectedMarker(marker);
									// selectTrail(marker);
								}}
								// options={{
								// 	icon: require(`../../assets/${marker.open}.svg`),
								// }}
								animation={2}
							/>
						</div>
					);
				})}
			</GoogleMap>
		);
	} else {
		return <div></div>;
	}
}

export default Map;
