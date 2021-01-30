import React, { useEffect } from 'react';
import './style.css';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import UserLocationMarker from '../../assets/userLocation.svg';

const containerStyle = {
	width: '100%',
	height: '90vh',
};

const mapOptions = {
	disableDefaultUI: true,
	zoomControl: true,
};

function Map({ restaurants, centerPoint, onMapLoad, userLocation }) {
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

	return (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={centerPoint}
			zoom={10}
			onLoad={onMapLoad}
			options={mapOptions}
		>
			{userLocation.lat ? (
				<div>
					<Marker
						position={{ lat: userLocation.lat, lng: userLocation.lng }}
						// options={{
						// 	icon: { UserLocationMarker },
						// 	// icon: require(`../../assets/userLocation.svg`),
						// }}
						animation={2}
						// labelAnchor={{ lat: userLocation.lat, lng: userLocation.lng }}
					/>
				</div>
			) : null}
			{restaurants[0].location ? (
				<div>
					{restaurants.map((res) => {
						return (
							<div key={`${res.location.lat}-${res.location.lng}`}>
								<Marker
									key={`${res.location.lat}-${res.location.lng}`}
									position={{ lat: res.location.lat, lng: res.location.lng }}
									onClick={() => {
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
				</div>
			) : null}
		</GoogleMap>
	);
}

export default Map;
