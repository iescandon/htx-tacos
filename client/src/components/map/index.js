import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

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
	resetCenterPoint,
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

	return (
		<div>
			<Button
				variant="btn"
				className="pr-0 mapbtn"
				onClick={() => resetCenterPoint()}
			>
				<i className="fa fa-location-arrow mr-3"></i>
			</Button>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={centerPoint}
				zoom={10}
				onLoad={onMapLoad}
				options={mapOptions}
			>
				{restaurants.map((res) => {
					return (
						<div key={`${res.location.lat}-${res.location.lng}`}>
							<Marker
								key={`${res.location.lat}-${res.location.lng}`}
								position={{ lat: res.location.lat, lng: res.location.lng }}
								onClick={() => {
									scrollToDiv(res._id);
								}}
								animation={2}
							/>
						</div>
					);
				})}
			</GoogleMap>
		</div>
	);
}

export default Map;
